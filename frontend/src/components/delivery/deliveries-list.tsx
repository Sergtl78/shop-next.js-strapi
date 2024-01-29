'use client'
import { GetDeliveriesQuery } from '@/graphql/generated'
import { cn, formatPrice } from '@/lib/utils'
import {
  deliveryActions,
  selectDeliveryId,
} from '@/redux/features/delivery-slice'
import { useActionCreators, useAppSelector } from '@/redux/hooks'

type Props = {
  deliveries: GetDeliveriesQuery['deliveries']
}

const DeliveriesList = ({ deliveries }: Props) => {
  const actions = useActionCreators(deliveryActions)
  const deliveryId = useAppSelector(selectDeliveryId)

  if (!deliveries)
    return (
      <div className='flex flex-1 justify-center mt-8'>
        <p>Нет доступных доставок</p>
      </div>
    )
  return (
    <>
      {deliveries?.data.map((delivery) => (
        <div
          key={delivery.id}
          className={cn(
            'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4',
            deliveryId === delivery.id && 'border-primary',
          )}
        >
          <div
            onClick={() =>
              actions.addDelivery({
                id: delivery.id ?? '1',
                price: delivery.attributes?.price ?? 0,
                title: delivery.attributes?.title ?? '',
              })
            }
            className='w-full flex flex-col md:flex-row items-center justify-between'
          >
            <div className='flex flex-col'>
              <h4>{delivery.attributes?.title}</h4>
              <p>{delivery.attributes?.description}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <b>Стоимость: {formatPrice(delivery.attributes?.price || 0)}</b>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default DeliveriesList
