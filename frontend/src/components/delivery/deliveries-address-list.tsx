'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GetAddressQuery } from '@/graphql/generated'
import { getAddress } from '@/lib/api/address'
import { cn } from '@/lib/utils'
import { useAuthState } from '@/store/authState'
import { useDeliveryState } from '@/store/deliveryState'
import { FormEvent, useEffect, useState } from 'react'
import DialogAddressCreate from '../user/address/dialog-address-create'
import DeliveryAddressItem from './delivery-address-item'

type Props = {}

const DeliveriesAddressList = ({}: Props) => {
  const user = useAuthState((stare) => stare.user)
  const addAddressId = useDeliveryState((state) => state.addAddressId)
  const [addresses, setAddresses] = useState<GetAddressQuery['addresses']>()
  const [id, setId] = useState('1')
  const deliveryId = useDeliveryState((state) => state.id)

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    setId(e.currentTarget.value)
  }

  addresses?.data.forEach((delivery) => {
    id == delivery.id ? addAddressId(id) : delivery
  })
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
        <RadioGroup defaultValue={addresses?.data[0].id || '1'}>
          {addresses?.data.map((address) => (
            <div
              key={address.id}
              className={cn(
                'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4',
                id == address.id && 'border-primary',
              )}
            >
              <RadioGroupItem
                value={address.id ?? '1'}
                id={'address' + address.id ?? '1'}
                onClick={(e) => handleChange(e)}
              />
              <Label
                htmlFor={'address' + address.id ?? '1'}
                className='w-full flex flex-col md:flex-row items-center justify-between'
              >
                <DeliveryAddressItem
                  address={address}
                  userId={user?.data?.id || ''}
                />
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className='flex flex-col gap-4'>
          <p>Нет сохраненных адресов</p>
        </div>
      )}
    </>
  )
}

export default DeliveriesAddressList
