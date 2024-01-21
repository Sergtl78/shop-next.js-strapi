import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { Delivery } from '@/graphql/generated'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = Delivery & { id: string; addressId?: string }

type Actions = {
  add: (state: State) => void
  clear: () => void
  addAddressId: (addressId: string) => void
}

export const useDeliveryState = createWithEqualityFn<State & Actions>()(
  persist(
    immer(
      devtools(
        (set, get) => ({
          id: '',
          price: 0,
          title: '',
          description: '',
          addressId: '',

          addAddressId: (addressId: string) => {
            set(
              (state) => ({ ...state, addressId }),
              false,
              'delivery/addAddressId',
            )
          },

          add: (state) => {
            set(state, false, 'delivery/add')
          },

          clear: () => {
            set(
              { id: '', price: 0, title: '', description: '' },
              false,
              'delivery/clear',
            )
          },
        }),
        { name: 'delivery' },
      ),
    ),
    { name: 'delivery' },
  ),
  shallow,
)
