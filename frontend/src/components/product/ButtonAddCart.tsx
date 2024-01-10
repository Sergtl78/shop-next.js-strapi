'use client'

import { GetProductQuery, GetProductsQuery, ProductEntity } from '@/graphql/generated'
import { useCartStore } from '@/store/cartState'
import { Icons } from '../Icons'
import { Button } from '../ui/button'
import { NonNullableQuery } from '@/lib/helpers/non-nullable-query'

type Props = {
  product: NonNullable<GetProductsQuery['products']>['data'][0]
}

export default function ButtonAddCart({ product }: Props) {
  const addCart = useCartStore((state) => state.addCart)
  return (
    <div>
      <Button onClick={() => addCart({ product, quantity: 1 })}>
        <Icons.cart className='w-6 h-6 fill-primary-foreground' />
      </Button>
    </div>
  )
}
