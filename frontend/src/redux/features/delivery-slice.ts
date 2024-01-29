import { Delivery, GetProductsQuery } from '@/graphql/generated'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductItem = NonNullable<GetProductsQuery['products']>['data'][0]

export interface CartItem extends ProductItem {
  quantity: number
}

type State = Delivery & { id: string; addressId?: string }

const initialState: State = {
  id: '',
  price: 0,
  title: '',
  description: '',
  addressId: '',
}

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState: initialState,
  selectors: {
    selectDeliveryPrice: (state) => state.price,
    selectDeliveryId: (state) => state.id,
    selectAddressId: (state) => state.addressId,
  },
  reducers: {
    addAddressId: (
      state: State,
      action: PayloadAction<{ addressId: string }>,
    ) => {
      return { ...state, addressId: action.payload.addressId }
    },
    addDelivery: (state: State, action: PayloadAction<State>) => {
      return action.payload
    },
    clearDelivery: (state: State) => {
      return initialState
    },
  },
})

export const { actions: deliveryActions, reducer: deliveryReducer } =
  deliverySlice
export const { selectAddressId, selectDeliveryId, selectDeliveryPrice } =
  deliverySlice.selectors
