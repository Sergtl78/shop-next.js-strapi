import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { GetProductsQuery } from '@/graphql/generated'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type ProductItem = NonNullable<GetProductsQuery['products']>['data'][0]

export interface CartItem extends ProductItem {
  quantity: number
}

type State = {
  cartItems: CartItem[]
  totalPrice: number
  totalQuantity: number
}

type Actions = {
  addCart: (value: CartItem) => void
  addFromCart: (id: string, count: number) => void
  removeFromCart: (id: string, count: number) => void
  removeItemCart: (id: string) => void
  clearCart: () => void
}

const getQuantityTotal = (cartItems: CartItem[]) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0)
}
const getPriceTotal = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + (item.attributes?.price ?? 0) * item.quantity,
    0,
  )
}

export const useCartStore = createWithEqualityFn<State & Actions>()(
  persist(
    immer(
      devtools(
        (set, get) => ({
          cartItems: [],
          totalPrice: 0,
          totalQuantity: 0,

          addCart: (value: CartItem) => {
            const { cartItems } = get()

            const isCart = cartItems.find(
              (cartItem) => cartItem.id === value.id,
            )
            if (isCart) {
              set(
                () => ({
                  cartItems: cartItems.map((item) =>
                    item.id === value.id
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

            set((state) => ({ totalPrice: getPriceTotal(state.cartItems) }))
            set((state) => ({
              totalQuantity: getQuantityTotal(state.cartItems),
            }))
          },
          addFromCart: (id: string, count: number) => {
            const { cartItems } = get()
            const isCart = cartItems.find((cartItem) => cartItem.id === id)
            if (isCart) {
              set(
                {
                  cartItems: cartItems.map((item) =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + count }
                      : item,
                  ),
                },
                false,
                'cart/addFromCart',
              )
            }
            set((state) => ({ totalPrice: getPriceTotal(state.cartItems) }))
            set((state) => ({
              totalQuantity: getQuantityTotal(state.cartItems),
            }))
          },
          removeFromCart: (id: string, count: number) => {
            const { cartItems } = get()
            const isCart = cartItems.find((cartItem) => cartItem.id === id)
            if (isCart) {
              isCart.quantity > count
                ? set(
                    {
                      cartItems: cartItems.map((item) =>
                        item.id === id
                          ? { ...item, quantity: item.quantity - count }
                          : item,
                      ),
                    },
                    false,
                    'cart/removeFromCart',
                  )
                : set(
                    {
                      cartItems: cartItems.filter((item) => item.id !== id),
                    },
                    false,
                    'cart/removeFromCart',
                  )
            }
            set((state) => ({ totalPrice: getPriceTotal(state.cartItems) }))
            set((state) => ({
              totalQuantity: getQuantityTotal(state.cartItems),
            }))
          },
          removeItemCart: (id: string) => {
            const { cartItems } = get()
            set(
              () => ({
                cartItems: cartItems.filter((item) => item.id !== id),
              }),
              false,
              'cart/removeItemCart',
            )
            set((state) => ({ totalPrice: getPriceTotal(state.cartItems) }))
            set((state) => ({
              totalQuantity: getQuantityTotal(state.cartItems),
            }))
          },
          /* getCartItemsTotal: () => {
            const { cartItems } = get()
            return cartItems.reduce((total, item) => total + item.quantity, 0)
          },
          getCartTotal: () => {
            const { cartItems } = get()
            return cartItems.reduce(
              (total, item) =>
                total + (item.attributes?.price ?? 0) * item.quantity,
              0,
            )
          }, */
          clearCart: () => {
            set(() => ({ cartItems: [] }), false, 'cart/clearCart')
            set(() => ({ totalPrice: 0 }))
            set(() => ({
              totalQuantity: 0,
            }))
          },
        }),
        { name: 'cart' },
      ),
    ),
    { name: 'cart' },
  ),
  shallow,
)
