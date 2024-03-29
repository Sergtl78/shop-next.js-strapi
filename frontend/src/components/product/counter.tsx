'use client'
import { GetProductsQuery } from '@/graphql/generated'
import { formatPrice, getOldPrice } from '@/lib/utils'
import { cartActions } from '@/redux/features/cart-slice'
import { useActionCreators } from '@/redux/hooks'
import { useState } from 'react'
import { Icon } from '../Icons'
import { Button } from '../ui/button'

type Props = {
  product: NonNullable<GetProductsQuery['products']>['data'][0]
}

const Counter = ({ product }: Props) => {
  const [count, setCount] = useState(1)
  const actions = useActionCreators(cartActions)
  return (
    <div className='flex flex-row w-full max-w-sm justify-between items-center my-4'>
      <div className='flex items-center justify-center'>
        <Button
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 1}
          variant={'ghost'}
          size={'sm'}
        >
          <b className='text-xl'>—</b>
        </Button>
        <span className='text-xl w-8 text-center font-semibold'>{count}</span>

        <Button
          onClick={() => setCount((prev) => prev + 1)}
          variant={'ghost'}
          size={'sm'}
        >
          <b className='text-xl'>+</b>
        </Button>
      </div>
      <div className='flex flex-col '>
        <div className='flex flex-row w-full items-center justify-between'>
          <span className='line-through '>
            {getOldPrice({
              price: product.attributes?.price ?? 0,
              discount:
                product.attributes?.collections?.data.reduce(
                  (acc, item) => (acc += item.attributes?.discount || 0),
                  0,
                ) || 0,
            })}
          </span>
          <span>{`— ${product.attributes?.collections?.data.reduce(
            (acc, item) => (acc += item.attributes?.discount || 0),
            0,
          )}%`}</span>
        </div>
        <div className='flex flex-row items-center gap-x-4 '>
          <p className='text-2xl font-semibold'>
            {formatPrice(product.attributes?.price! * count)}
          </p>
          <Button
            onClick={() => actions.addCart({ ...product, quantity: count })}
          >
            <Icon name='cart' className='w-6 h-6 fill-primary-foreground' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Counter
