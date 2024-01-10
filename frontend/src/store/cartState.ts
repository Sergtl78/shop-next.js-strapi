import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { GetProductsQuery } from '@/graphql/generated'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type CartItem = {
  product: NonNullable<GetProductsQuery['products']>['data'][0]
  quantity: number
}

type State = {
  cartItems: CartItem[]
}

type Actions = {
  addCart: (value: CartItem) => void
  addFromCart: (id: string, count: number) => void
  removeFromCart: (id: string, count: number) => void
  removeItemCart: (id: string) => void
  getCartItemsTotal: () => number
  getCartTotal: () => number
  clearCart: () => void
}

export const useCartStore = createWithEqualityFn<State & Actions>()(
  persist(
    immer(
      devtools(
        (set, get) => ({
          cartItems: [],
          addCart: (value: CartItem) => {
            const { cartItems } = get()

            const isCart = cartItems.find(
              (cartItem) => cartItem.product.id === value.product.id,
            )
            if (isCart) {
              set(
                () => ({
                  cartItems: cartItems.map((item) =>
                    item.product.id === value.product.id
                      ? { ...item, quantity: item.quantity + value.quantity }
                      : item,
                  ),
                }),
                false,
                'cart/addCart',
              )
            } else {
              set({ cartItems: cartItems.concat(value) }, false, 'cart/addCart')
            }
          },
          addFromCart: (id: string, count: number) => {
            const { cartItems } = get()
            const isCart = cartItems.find(
              (cartItem) => cartItem.product.id === id,
            )
            if (isCart) {
              set(
                {
                  cartItems: cartItems.map((item) =>
                    item.product.id === id
                      ? { ...item, quantity: item.quantity + count }
                      : item,
                  ),
                },
                false,
                'cart/addFromCart',
              )
            }
          },
          removeFromCart: (id: string, count: number) => {
            const { cartItems } = get()
            const isCart = cartItems.find(
              (cartItem) => cartItem.product.id === id,
            )
            if (isCart) {
              isCart.quantity > count
                ? set(
                    {
                      cartItems: cartItems.map((item) =>
                        item.product.id === id
                          ? { ...item, quantity: item.quantity - count }
                          : item,
                      ),
                    },
                    false,
                    'cart/removeFromCart',
                  )
                : set(
                    {
                      cartItems: cartItems.filter(
                        (item) => item.product.id !== id,
                      ),
                    },
                    false,
                    'cart/removeFromCart',
                  )
            }
          },
          removeItemCart: (id: string) => {
            const { cartItems } = get()
            set(
              () => ({
                cartItems: cartItems.filter((item) => item.product.id !== id),
              }),
              false,
              'cart/removeItemCart',
            )
          },
          getCartItemsTotal: () => {
            const { cartItems } = get()
            return cartItems.reduce((total, item) => total + item.quantity, 0)
          },
          getCartTotal: () => {
            const { cartItems } = get()
            return cartItems.reduce(
              (total, item) =>
                total + (item.product?.attributes?.price ?? 0) * item.quantity,
              0,
            )
          },
          clearCart: () =>
            set(() => ({ cartItems: [] }), false, 'cart/clearCart'),
        }),
        { name: 'cart' },
      ),
    ),
    { name: 'cart' },
  ),
  shallow,
)
