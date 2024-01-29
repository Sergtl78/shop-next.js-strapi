'use client'
import { GetAddressQuery } from '@/graphql/generated'
import { getAddress } from '@/lib/api/address'
import { cn } from '@/lib/utils'
import { selectUser } from '@/redux/features/auth-slice'
import {
  deliveryActions,
  selectAddressId,
  selectDeliveryId,
} from '@/redux/features/delivery-slice'
import { useActionCreators, useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'
import DialogAddressCreate from '../user/address/dialog-address-create'
import DeliveryAddressItem from './delivery-address-item'

type Props = {}

const DeliveriesAddressList = ({}: Props) => {
  const user = useAppSelector(selectUser)
  const actions = useActionCreators(deliveryActions)
  const deliveryId = useAppSelector(selectDeliveryId)
  const addressId = useAppSelector(selectAddressId)

  const [addresses, setAddresses] = useState<GetAddressQuery['addresses']>()

  useEffect(() => {
    user?.data?.id &&
      getAddress({ id: user?.data?.id }).then((res) => setAddresses(res))
  }, [])
  if (deliveryId === '1') return null
  return (
    <>
      <div className='flex w-full flex-col-reverse md:flex-row items-center justify-between px-4'>
        <h2>Выберите адрес</h2>
        <DialogAddressCreate />
      </div>
      {addresses?.data && addresses?.data.length > 0 ? (
        addresses?.data.map((address) => (
          <div
            key={address.id}
            className={cn(
              'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4',
              addressId === address.id && 'border-primary',
            )}
          >
            <div
              onClick={() =>
                actions.addAddressId({ addressId: address.id ?? '1' })
              }
              className='w-full flex flex-col md:flex-row items-center justify-between'
            >
              <DeliveryAddressItem
                address={address}
                userId={user?.data?.id || ''}
              />
            </div>
          </div>
        ))
      ) : (
        <div className='flex flex-col gap-4'>
          <p>Нет сохраненных адресов</p>
        </div>
      )}
    </>
  )
}

export default DeliveriesAddressList
