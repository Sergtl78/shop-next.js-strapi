'use client'

import Link from 'next/link'
import CartNavIcon from './cart-nav-Icon'

import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import CartHeader from './cart-header'
import CartList from './cart-list'
import CartResult from './cart-result'

type Props = {}

const CartSheet = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <CartNavIcon />
        </div>
      </SheetTrigger>
      <SheetContent className='md:max-w-lg '>
        <SheetHeader>
          <CartHeader />
        </SheetHeader>

        <ScrollArea className='h-[60vh] md:h-[70vh]'>
          <CartList isPage={false} />
        </ScrollArea>
        <div className='flex flex-col gap-4'>
          <CartResult />
          <SheetClose asChild>
            <Link href={'/cart'} className='flex w-full justify-center'>
              <Button>Оформить заказ</Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
