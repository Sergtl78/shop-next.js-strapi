import { GetProductsQuery, GetUserByIdQuery } from '@/graphql/generated'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductItem = NonNullable<GetProductsQuery['products']>['data'][0]

export interface CartItem extends ProductItem {
  quantity: number
}

type State = {
  jwt: string
  user: GetUserByIdQuery['usersPermissionsUser']
  isAuth: boolean
}

const initialState: State = {
  jwt: '',
  user: null,
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  selectors: {
    selectAuth: (state) => state,
    selectIsAuth: (state) => state.isAuth,
    selectJwt: (state) => state.jwt,
    selectUser: (state) => state.user,
  },
  reducers: {
    addAuthData: (state: State, action: PayloadAction<State>) => {
      return action.payload
    },
    updateUser: (
      state: State,
      action: PayloadAction<GetUserByIdQuery['usersPermissionsUser']>,
    ) => {
      return { ...state, user: action.payload }
    },
    clearAuthData: (state: State) => {
      return initialState
    },
  },
})

export const { actions: authActions, reducer: authReducer } = authSlice
export const { selectAuth, selectIsAuth, selectJwt, selectUser } =
  authSlice.selectors
