import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { UsersPermissionsMe } from '@/graphql/generated'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  jwt: string
  user: UsersPermissionsMe | null
  isAuth: boolean
}

type Actions = {
  addAuthData: (state: State) => void
  clearAuthData: () => void
}

export const useAuthStore = createWithEqualityFn<State & Actions>()(
  persist(
    immer(
      devtools(
        (set, get) => ({
          jwt: '',
          user: null,
          isAuth: false,

          addAuthData: (state) => {
            set(state)
          },

          clearAuthData: () => {
            set({ jwt: '', user: null, isAuth: false })
          },
        }),
        { name: 'cart' },
      ),
    ),
    { name: 'auth-data' },
  ),
  shallow,
)
