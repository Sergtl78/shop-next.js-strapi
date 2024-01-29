'use client'
import {
  ComponentElementCartItemInput,
  Enum_Order_Status,
} from '@/graphql/generated'
import { createOrder } from '@/lib/api/order'
import { selectUser } from '@/redux/features/auth-slice'
import {
  cartActions,
  selectCart,
  selectTotalPrice,
  selectTotalQuantity,
} from '@/redux/features/cart-slice'
import {
  selectAddressId,
  selectDeliveryId,
  selectDeliveryPrice,
} from '@/redux/features/delivery-slice'
import { useActionCreators, useAppSelector } from '@/redux/hooks'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { toast } from '../ui/use-toast'
import CartResult from './cart-result'

type Props = {}

const CartTotal = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const user = useAppSelector(selectUser)
  const addressId = useAppSelector(selectAddressId)
  const deliveryPrice = useAppSelector(selectDeliveryPrice)
  const deliveryId = useAppSelector(selectDeliveryId)
  const cartTotalPrice = useAppSelector(selectTotalPrice)
  const totalQuantity = useAppSelector(selectTotalQuantity)
  const cartItems = useAppSelector(selectCart)
  const actions = useActionCreators(cartActions)

  const cartForOrder: ComponentElementCartItemInput[] = cartItems.map(
    (item) => {
      return { quantity: item.quantity, product: item.id }
    },
  )

  const disabledButton = !user || !addressId || !deliveryId || !cartItems

  const handleCreateOrder = async () => {
    if (user?.data?.id && addressId) {
      const order = await createOrder({
        userId: user?.data?.id,
        addressId,
        deliveryId,
        status: Enum_Order_Status.Pending,
        total_price: deliveryPrice + cartTotalPrice,
        total_quantity: totalQuantity,
        cart: cartForOrder,
      })
      if (order) {
        actions.clearCart()
        return toast({
          title: 'Спасибо за ваш заказ',
          type: 'foreground',
          variant: 'success',
        })
      }
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section className='sticky top-32 flex w-full h-60  rounded-2xl border border-border bg-card text-card-foreground p-4  '>
      {mounted ? (
        <div className='flex flex-col w-full h-full gap-2'>
          <CartResult />
          <div className='flex flex-col w-full h-full gap-2'>
            <Button
              onClick={() => handleCreateOrder()}
              className='w-full'
              disabled={disabledButton}
            >
              Оформить заказ
            </Button>
            <div className='flex flex-row items-center justify-start'>
              <Checkbox className='w-4 h-4 mr-4  ' checked={true} />
              <p className='text-sm'>
                Соглашаюсь с правилами пользования торговой площадкой и возврата
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='h-full w-full animate-pulse' />
      )}
    </section>
  )
}

export default CartTotal
