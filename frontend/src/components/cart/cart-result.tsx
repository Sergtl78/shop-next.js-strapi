'use client'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartState'
import { useDeliveryState } from '@/store/deliveryState'

type Props = {}

const CartResult = (props: Props) => {
  const deliveryPrice = useDeliveryState((state) => state.price)
  const totalPrice = useCartStore((store) => store.totalPrice)
  const totalQuantity = useCartStore((store) => store.totalQuantity)
  return (
    <div className='flex flex-col w-full h-full gap-2'>
      <div className='flex flex-row items-center justify-between'>
        <span>Доставка: </span>
        <span>{formatPrice(deliveryPrice)}</span>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <span>Товары {totalQuantity} шт. </span>
        <span>{formatPrice(totalPrice)}</span>
      </div>
      <div className='flex flex-row items-center justify-between text-2xl'>
        <b>Итого </b>
        <b>{formatPrice(totalPrice + deliveryPrice)}</b>
      </div>
    </div>
  )
}

export default CartResult
