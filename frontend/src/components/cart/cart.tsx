'use client'

import Link from 'next/link'
import CartNavIcon from './cart-nav-Icon'

import { TrashIcon } from '@radix-ui/react-icons'

import { formatPrice } from '@/lib/utils'
import { useCartStore } from '../../store/cartState'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import ItemCart from './cart-item'

type Props = {}

const Cart = (props: Props) => {
  const cartItems = useCartStore((state) => state.cartItems)
  const clearCart = useCartStore((state) => state.clearCart)

  const totalPrice = useCartStore((state) => state.getCartTotal)
  const totalItems = useCartStore((state) => state.getCartItemsTotal)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <CartNavIcon />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className='flex flex-row gap-4 items-center w-full'>
            <SheetTitle className=''>Корзина</SheetTitle>
            <Button
              className='group mb-2'
              onClick={() => clearCart()}
              variant={'ghost'}
              size={'icon'}
            >
              <TrashIcon className='w-6 h-6 stroke-1 group-hover:stroke-destructive' />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className='h-[70vh]'>
          <div className='flex flex-col space-y-2'>
            {cartItems && cartItems.length === 0 && (
              <div className=' flex flex-col w-full items-center justify-center'>
                <h3 className='h3'>Ваша корзина пуста</h3>
                <p className='text-sm text-foreground mb-4'>Посетите каталог</p>
                <SheetClose asChild>
                  <Link href={'/catalog'}>
                    <Button>Каталог</Button>
                  </Link>
                </SheetClose>
              </div>
            )}
            {cartItems.length > 0 &&
              cartItems.map((cartItem, ind) => (
                <ItemCart key={ind} cartItem={cartItem} />
              ))}
          </div>
        </ScrollArea>
        <div className='flex flex-col w-full py-4 text-lg font-semibold'>
          <p>Всего:</p>
          <div className='flex flex-row items-center justify-between'>
            <p>Товары </p>
            <p>{`${totalItems()} шт.`}</p>
          </div>
          <div className='flex flex-row w-full  items-center justify-between'>
            <p>Цена </p>
            <p>{formatPrice(totalPrice())}</p>
          </div>
        </div>
        <Link href={'/cart'} className='flex w-full justify-center'>
          <Button>Оформить заказ</Button>
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
