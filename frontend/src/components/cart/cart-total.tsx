'use client'
import {
  ComponentElementCartItemInput,
  Enum_Order_Status,
} from '@/graphql/generated'
import { createOrder } from '@/lib/api/order'
import { useAuthState } from '@/store/authState'
import { useCartStore } from '@/store/cartState'
import { useDeliveryState } from '@/store/deliveryState'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { toast } from '../ui/use-toast'
import CartResult from './cart-result'

type Props = {}

const CartTotal = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  const user = useAuthState((state) => state.user)
  const addressId = useDeliveryState((state) => state.addressId)
  const deliveryPrice = useDeliveryState((state) => state.price)
  const deliveryId = useDeliveryState((state) => state.id)
  const cartTotalPrice = useCartStore((state) => state.totalPrice)
  const totalQuantity = useCartStore((state) => state.totalQuantity)
  const cartItems = useCartStore((state) => state.cartItems)
  const clearCart = useCartStore((state) => state.clearCart)

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
        clearCart()
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
      {mounted && (
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
      )}
    </section>
  )
}

export default CartTotal
