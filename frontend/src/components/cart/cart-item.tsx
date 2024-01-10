'use client'
import { CartItem, useCartStore } from '@/store/cartState'
import MediaImage from '../media-image'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import CounterCart from './counter-cart'

type Props = {
  cartItem: CartItem
}

const ItemCart = ({ cartItem }: Props) => {
  const removeItemCart = useCartStore((state) => state.removeItemCart)
  return (
    <div className='flex flex-col  w-full items-center justify-between border border-border rounded-xl shadow-md space-x-5'>
      <div className='flex flex-row w-full items-center justify-between px-4 py-2 '>
        <Link href={`/product?productId=${cartItem.product.id}`} className=''>
          <div className='overflow-hidden flex shrink-0  w-20 h-20'>
            <MediaImage
              className='h-auto w-auto object-cover transition-all hover:scale-105 rounded-lg aspect-[4/4]'
              image={cartItem.product?.attributes?.image.data[0].attributes}
            />
          </div>
        </Link>
        <h4 className='font-semibold ml-4 '>
          {cartItem.product?.attributes?.name}
        </h4>

        <Button
          className='group'
          onClick={() => removeItemCart(cartItem.product.id || '')}
          variant={'ghost'}
          size={'icon'}
        >
          <TrashIcon className='w-6 h-6 stroke-1 group-hover:stroke-destructive' />
        </Button>
      </div>

      <div className='flex w-full px-4 py-2  '>
        <CounterCart cartItem={cartItem} />
      </div>
    </div>
  )
}

export default ItemCart
