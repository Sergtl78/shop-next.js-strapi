'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GetDeliveriesQuery } from '@/graphql/generated'
import { cn, formatPrice } from '@/lib/utils'
import { useDeliveryState } from '@/store/deliveryState'
import { FormEvent, useState } from 'react'

type Props = {
  deliveries: GetDeliveriesQuery['deliveries']
}

const DeliveriesList = ({ deliveries }: Props) => {
  const addDelivery = useDeliveryState((state) => state.add)
  const [id, setId] = useState('1')

  const handleChange = (e: FormEvent<HTMLButtonElement>) => {
    setId(e.currentTarget.value)
  }

  deliveries?.data.forEach((delivery) => {
    id == delivery.id
      ? addDelivery({
          id: delivery.id,
          price: delivery.attributes?.price ?? 0,
          title: delivery.attributes?.title ?? '',
          description: delivery.attributes?.description,
        })
      : delivery
  })

  if (!deliveries)
    return (
      <div className='flex flex-1 justify-center mt-8'>
        <p>Нет доступных доставок</p>
      </div>
    )
  return (
    <RadioGroup defaultValue={deliveries?.data[0].id || '1'}>
      {deliveries?.data.map((delivery) => (
        <div
          key={delivery.id}
          className={cn(
            'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4',
            id == delivery.id && 'border-primary',
          )}
        >
          <RadioGroupItem
            value={delivery.id ?? '1'}
            id={'delivery' + delivery.id ?? '1'}
            onClick={(e) => handleChange(e)}
          />
          <Label
            htmlFor={'delivery' + delivery.id ?? '1'}
            className='w-full flex flex-col md:flex-row items-center justify-between'
          >
            <div className='flex flex-col'>
              <h4>{delivery.attributes?.title}</h4>
              <p>{delivery.attributes?.description}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <b>Стоимость: {formatPrice(delivery.attributes?.price || 0)}</b>
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default DeliveriesList
