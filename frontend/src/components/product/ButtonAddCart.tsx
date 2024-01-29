'use client'

import { GetProductsQuery } from '@/graphql/generated'
import { cartActions } from '@/redux/features/cart-slice'
import { useActionCreators } from '@/redux/hooks'
import { Icon } from '../Icons'
import { Button } from '../ui/button'

type Props = {
  product: NonNullable<GetProductsQuery['products']>['data'][0]
}

export default function ButtonAddCart({ product }: Props) {
  const actions = useActionCreators(cartActions)
  return (
    <div>
      <Button onClick={() => actions.addCart({ ...product, quantity: 1 })}>
        <Icon name='cart' className='w-6 h-6 fill-primary-foreground' />
      </Button>
    </div>
  )
}
