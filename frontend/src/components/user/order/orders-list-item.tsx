import { Icon } from '@/components/Icons'
import MediaImage from '@/components/media-image'
import { GetOrderByUserIdQuery } from '@/graphql/generated'
import { formatDate, formatStatus } from '@/lib/api/api-helpers'
import { formatPrice } from '@/lib/utils'

type Props = {
  order: NonNullable<GetOrderByUserIdQuery['orders']>['data'][0]
}

const OrdersListItem = ({ order }: Props) => {
  const cartItems = order.attributes?.cart
  return (
    <div className='flex flex-col rounded-2xl border px-4 py-2 gap-2'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <p>
          Заказ № {order.id} — {formatDate(order.attributes?.createdAt)}
        </p>
        <b className='uppercase'>
          {formatStatus(order.attributes?.status || '')}
        </b>
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        {cartItems?.map((cartItem) => (
          <li
            key={cartItem?.id}
            className='relative flex flex-col border w-full h-full rounded-xl gap-2 '
          >
            <MediaImage
              className='aspect-square object-cover'
              image={
                cartItem?.product?.data?.attributes?.image.data[0].attributes
              }
            />
            <div className='flex flex-row items-center absolute top-0 right-2'>
              <Icon
                name='star'
                className='w-5 h-5 fill-yellow-500 text-yellow-500 mr-1'
              />
              <b>{cartItem?.product?.data?.attributes?.rating ?? 0}</b>
            </div>
            <div className='flex flex-row w-full h-full items-center justify-between text-sm px-2 pb-4'>
              <p>{cartItem?.quantity}</p>
              <p>x</p>
              <b>
                {formatPrice(cartItem?.product?.data?.attributes?.price ?? 0)}
              </b>
            </div>
          </li>
        ))}
      </ul>
      <p>
        Доставка: {order.attributes?.delivery?.data?.attributes?.title} —{' '}
        {formatPrice(order.attributes?.delivery?.data?.attributes?.price || 0)}
      </p>
      <p>Стоимость заказа: {formatPrice(order.attributes?.total_price || 0)}</p>
    </div>
  )
}

export default OrdersListItem
