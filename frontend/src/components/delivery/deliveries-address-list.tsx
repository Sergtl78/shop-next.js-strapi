'use client'
import { GetAddressQuery } from '@/graphql/generated'
import { getAddress } from '@/lib/api/address'
import { cn } from '@/lib/utils'
import { useAuthState } from '@/store/authState'
import { useDeliveryState } from '@/store/deliveryState'
import { useEffect, useState } from 'react'
import DialogAddressCreate from '../user/address/dialog-address-create'
import DeliveryAddressItem from './delivery-address-item'

type Props = {}

const DeliveriesAddressList = ({}: Props) => {
  const user = useAuthState((stare) => stare.user)
  const addAddressId = useDeliveryState((state) => state.addAddressId)

  const addressId = useDeliveryState((state) => state.addressId)
  const deliveryId = useDeliveryState((state) => state.id)

  const [addresses, setAddresses] = useState<GetAddressQuery['addresses']>()

  useEffect(() => {
    user?.data?.id &&
      getAddress({ id: user?.data?.id }).then((res) => setAddresses(res))
  }, [])
  return (
    <div className={deliveryId === '1' ? 'hidden' : ''}>
      <div className='flex w-full flex-col-reverse md:flex-row items-center justify-between px-4'>
        <h2>Выберите адрес</h2>
        <DialogAddressCreate />
      </div>
      {addresses?.data && addresses?.data.length > 0 ? (
        addresses?.data.map((address) => (
          <div
            key={address.id}
            onClick={() => addAddressId(address.id ?? '')}
            className={cn(
              'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4 mb-4',
              addressId == address.id && 'border-primary',
            )}
          >
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
              <DeliveryAddressItem
                address={address}
                userId={user?.data?.id || ''}
              />
            </div>
          </div>
        ))
      ) : (
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p>Нет сохраненных адресов</p>
        </div>
      )}
    </div>
  )
}

export default DeliveriesAddressList
