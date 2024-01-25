'use client'
import { GetDeliveriesQuery } from '@/graphql/generated'
import { cn, formatPrice } from '@/lib/utils'
import { useDeliveryState } from '@/store/deliveryState'

type Props = {
  deliveries: GetDeliveriesQuery['deliveries']
}

const DeliveriesList = ({ deliveries }: Props) => {
  const addDelivery = useDeliveryState((state) => state.add)
  const deliveryId = useDeliveryState((state) => state.id)

  return (
    <>
      {!deliveries ? (
        <div className='flex flex-1 justify-center mt-8'>
          <p>Нет доступных доставок</p>
        </div>
      ) : (
        <div>
          {deliveries?.data.map((delivery) => (
            <div
              key={delivery.id}
              onClick={() =>
                addDelivery({
                  id: delivery.id ?? '',
                  price: delivery.attributes?.price ?? 0,
                  title: delivery.attributes?.title ?? '',
                })
              }
              className={cn(
                'flex items-center space-x-4 border rounded-2xl px-4 py-2 mx-4 mb-4',
                deliveryId == delivery.id && 'border-primary',
              )}
            >
              <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <h4>{delivery.attributes?.title}</h4>
                  <p>{delivery.attributes?.description}</p>
                </div>
                <div className='flex flex-row gap-4'>
                  <b>
                    Стоимость: {formatPrice(delivery.attributes?.price || 0)}
                  </b>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default DeliveriesList
