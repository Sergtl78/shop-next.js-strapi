import { getOrderByUserId } from '@/lib/api/order'
import OrdersListItem from './orders-list-item'

type Props = {
  userId: string
}

const OrdersList = async ({ userId }: Props) => {
  const orders = await getOrderByUserId(userId)
  return (
    <section className='flex flex-col w-full px-4 '>
      <h2>Ваши заказы</h2>
      {orders && orders.data.length > 0 ? (
        <ul className='flex flex-col gap-4 w-full  '>
          {orders.data.map((order) => (
            <li key={'order' + order.id}>
              <OrdersListItem order={order} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='flex flex-col gap-4'></div>
      )}
    </section>
  )
}

export default OrdersList
