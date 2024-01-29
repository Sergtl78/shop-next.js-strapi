import { GetProductsQuery } from '@/graphql/generated'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductItem = NonNullable<GetProductsQuery['products']>['data'][0]

export interface CartItem extends ProductItem {
  quantity: number
}

type State = {
  cartItems: CartItem[]
  totalPrice: number
  totalQuantity: number
}

const initialState: State = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  selectors: {
    selectCart: (state) => state.cartItems,
    selectTotalPrice: (state) => state.totalPrice,
    selectTotalQuantity: (state) => state.totalQuantity,
  },
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const isItemInState = state.cartItems.find(
        (item) => item.id === action.payload.id,
      )
      if (isItemInState) {
        state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? (cartItem.quantity = cartItem.quantity + action.payload.quantity)
            : cartItem,
        )
      } else {
        state.cartItems.push(action.payload)
      }
      state.totalPrice = getPriceTotal(state.cartItems)
      state.totalQuantity = getQuantityTotal(state.cartItems)
    },
    addFromCart: (
      state,
      action: PayloadAction<{ id: string; count: number }>,
    ) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = item.quantity + action.payload.count
      }
      state.totalPrice = getPriceTotal(state.cartItems)
      state.totalQuantity = getQuantityTotal(state.cartItems)
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; count: number }>,
    ) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id)
      if (item && item?.quantity <= action.payload.count) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        )
      } else {
        if (item) {
          item.quantity = item.quantity - action.payload.count
        }
      }
      state.totalPrice = getPriceTotal(state.cartItems)
      state.totalQuantity = getQuantityTotal(state.cartItems)
    },
    removeItemCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      )
      state.totalPrice = getPriceTotal(state.cartItems)
      state.totalQuantity = getQuantityTotal(state.cartItems)
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalPrice = 0
      state.totalQuantity = 0
    },
  },
})

export const { actions: cartActions, reducer: cartReducer } = cartSlice
export const { selectCart, selectTotalPrice, selectTotalQuantity } =
  cartSlice.selectors
