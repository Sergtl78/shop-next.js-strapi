'use client'
import { CartItem, cartActions } from '@/redux/features/cart-slice'
import { useActionCreators } from '@/redux/hooks'
import { TrashIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import MediaImage from '../media-image'
import { Button } from '../ui/button'
import CounterCart from './counter-cart'

type Props = {
  cartItem: CartItem
  isPage?: boolean
}

const ItemCart = ({ cartItem, isPage }: Props) => {
  const actions = useActionCreators(cartActions)
  return (
    <div className='flex flex-col  w-full items-center justify-between border border-border rounded-xl shadow-md space-x-5'>
      <div className='flex flex-row w-full items-center justify-between px-4 py-2 '>
        <div className='flex flex-row items-center'>
          <Link href={`/products?productId=${cartItem.id}`} className=''>
            <div className='overflow-hidden flex shrink-0  w-20 h-20'>
              <MediaImage
                className='h-auto w-auto object-cover transition-all hover:scale-105 rounded-lg aspect-[4/4]'
                image={cartItem.attributes?.image.data[0].attributes}
              />
            </div>
          </Link>
          <h4 className='text-sm font-semibold ml-4 '>
            {cartItem.attributes?.name}
          </h4>
        </div>
        {isPage && <CounterCart cartItem={cartItem} />}
        <Button
          className='group'
          onClick={() => actions.removeItemCart({ id: cartItem.id || '' })}
          variant={'ghost'}
          size={'icon'}
        >
          <TrashIcon className='w-6 h-6 stroke-1 group-hover:stroke-destructive' />
        </Button>
      </div>

      {!isPage && <CounterCart cartItem={cartItem} />}
    </div>
  )
}

export default ItemCart
