'use client'
import { formatPrice } from '@/lib/utils'
import {
  selectTotalPrice,
  selectTotalQuantity,
} from '@/redux/features/cart-slice'
import { selectDeliveryPrice } from '@/redux/features/delivery-slice'
import { useAppSelector } from '@/redux/hooks'

type Props = {}

const CartResult = (props: Props) => {
  const deliveryPrice = useAppSelector(selectDeliveryPrice)

  console.log(deliveryPrice)

  const totalPrice = useAppSelector(selectTotalPrice)
  const totalQuantity = useAppSelector(selectTotalQuantity)
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
