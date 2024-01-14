'use client'

import { formatPrice, getOldPrice } from '@/lib/utils'
import { CartItem, useCartStore } from '@/store/cartState'
import { Button } from '../ui/button'

type Props = {
  cartItem: CartItem
  min?: number
  max?: number
  increment?: number
  decrement?: number
} & React.HTMLAttributes<HTMLDivElement>

const CounterCart = ({ cartItem, increment = 1, decrement = 1 }: Props) => {
  const addFromCart = useCartStore((state) => state.addFromCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const handleIncrement = () => {
    addFromCart(cartItem.id || '', increment)
  }
  const handleDecrement = () => {
    removeFromCart(cartItem.id || '', decrement)
  }

  return (
    <div className='flex flex-col md:flex-row w-full max-w-sm justify-between items-center '>
      <div className='flex flex-row items-center space-x-4 justify-between w-full'>
        <div className='flex items-center justify-start'>
          <Button
            className='bg-muted'
            onClick={handleDecrement}
            variant={'ghost'}
            size={'sm'}
          >
            <b className='text-lg'>-</b>
          </Button>
          <span className='w-8 md:w-12 text-lg font-semibold outline-none text-center focus-visible:ring-transparent p-0 '>
            {cartItem.quantity}
          </span>
          <Button
            className='bg-muted'
            onClick={handleIncrement}
            variant={'ghost'}
            size={'sm'}
          >
            <b className='text-lg'>+</b>
          </Button>
        </div>
        {cartItem && (
          <div className='flex flex-col '>
            <div className='flex flex-row w-full items-center justify-between'>
              <span className='line-through '>
                {getOldPrice({
                  price: cartItem.attributes?.price ?? 0,
                  discount:
                    cartItem.attributes?.collections?.data.reduce(
                      (acc, item) => (acc += item.attributes?.discount || 0),
                      0,
                    ) || 0,
                })}
              </span>
            </div>
            <p className='text-lg font-semibold '>
              {formatPrice(
                (cartItem.attributes?.price || 0) * cartItem.quantity,
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CounterCart
