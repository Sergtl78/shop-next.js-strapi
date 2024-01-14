'use client'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import CartResult from './cart-result'

type Props = {}

const CartTotal = (props: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section className='sticky top-32 flex w-full h-60  rounded-2xl border border-border bg-card text-card-foreground p-4  '>
      {mounted ? (
        <div className='flex flex-col w-full h-full gap-2'>
          <CartResult />
          <div className='flex flex-col w-full h-full gap-2'>
            <Button className='w-full'>Оформить заказ</Button>
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
