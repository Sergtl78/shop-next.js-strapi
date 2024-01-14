'use client'
import { useCartStore } from '@/store/cartState'
import Link from 'next/link'
import { Button } from '../ui/button'
import { SheetClose } from '../ui/sheet'
import ItemCart from './cart-item'

type Props = {
  isPage?: boolean
}

const CartList = ({ isPage }: Props) => {
  const cartItems = useCartStore((state) => state.cartItems)
  return (
    <div className='flex flex-col space-y-2'>
      {cartItems && cartItems.length === 0 && (
        <div className=' flex flex-col w-full items-center justify-center'>
          <h3 className='h3'>Ваша корзина пуста</h3>
          <p className='text-sm text-foreground mb-4'>Посетите каталог</p>
          {!isPage ? (
            <SheetClose asChild>
              <Link href={'/catalog'}>
                <Button>Каталог</Button>
              </Link>
            </SheetClose>
          ) : (
            <Link href={'/catalog'}>
              <Button>Каталог</Button>
            </Link>
          )}
        </div>
      )}
      {cartItems.length > 0 &&
        cartItems.map((cartItem, ind) => (
          <ItemCart key={ind} cartItem={cartItem} isPage={isPage} />
        ))}
    </div>
  )
}

export default CartList
