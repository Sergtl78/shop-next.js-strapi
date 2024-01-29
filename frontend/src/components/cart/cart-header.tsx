'use client'
import { cartActions, selectTotalQuantity } from '@/redux/features/cart-slice'
import { useActionCreators, useAppSelector } from '@/redux/hooks'
import { TrashIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

type Props = {}

const CartHeader = (props: Props) => {
  const actions = useActionCreators(cartActions)

  const totalQuantity = useAppSelector(selectTotalQuantity)
  return (
    <div className='flex flex-row gap-8 items-center w-full'>
      <div className='relative '>
        <h2 className=''>Корзина</h2>
        <span className='absolute top-0 -right-4'>{totalQuantity}</span>
      </div>

      <Button
        className='group mb-2'
        onClick={() => actions.clearCart()}
        variant={'ghost'}
        size={'icon'}
      >
        <TrashIcon className='w-6 h-6 stroke-1 group-hover:stroke-destructive' />
      </Button>
    </div>
  )
}

export default CartHeader
