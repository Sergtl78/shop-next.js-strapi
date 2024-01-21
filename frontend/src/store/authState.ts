import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { GetUserByIdQuery } from '@/graphql/generated'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  jwt: string
  user: GetUserByIdQuery['usersPermissionsUser']
  isAuth: boolean
}

type Actions = {
  addAuthData: (state: State) => void
  clearAuthData: () => void
}

export const useAuthState = createWithEqualityFn<State & Actions>()(
  persist(
    immer(
      devtools(
        (set, get) => ({
          jwt: '',
          user: null,
          isAuth: false,

          addAuthData: (state) => {
            set(state, false, 'auth/addAuthData')
          },

          clearAuthData: () => {
            set(
              { jwt: '', user: null, isAuth: false },
              false,
              'auth/clearAuthData',
            )
          },
        }),
        { name: 'cart' },
      ),
    ),
    { name: 'auth-data' },
  ),
  shallow,
)
