import { GetProductsQuery } from '@/graphql/generated'
import { formatPrice, getOldPrice } from '@/lib/utils'
import Link from 'next/link'
import MediaImage from '../media-image'
import ButtonAddCart from './ButtonAddCart'

type Props = {
  data: NonNullable<GetProductsQuery['products']>['data'][0]
}

const CardProduct = ({ data }: Props) => {
  const product = data
  if (!product) return null
  return (
    <div className='relative flex flex-col w-full h-full rounded-xl border bg-card text-card-foreground shadow overflow-hidden'>
      <Link href={`/products?productId=${product.id}`}>
        <MediaImage
          className='aspect-square object-cover'
          image={product.attributes?.image.data[0].attributes}
        />
      </Link>
      <MediaImage
        className='aspect-square absolute top-0 left-0 w-10 h-10'
        image={
          product.attributes?.collection?.data?.attributes?.icon?.data
            ?.attributes
        }
      />
      <div className='flex flex-col w-full h-full items-center justify-between px-4 py-2 gap-2 '>
        <p>{product.attributes?.name}</p>
        <div className='flex flex-col w-full'>
          {product.attributes?.collection?.data?.attributes?.discount && (
            <div className='flex flex-row w-full items-center justify-between'>
              <span className='line-through '>
                {getOldPrice({
                  price: product.attributes?.price ?? 0,
                  discount:
                    product.attributes?.collection?.data?.attributes
                      ?.discount ?? 0,
                })}
              </span>
              <span>{`— ${product.attributes?.collection?.data?.attributes?.discount}%`}</span>
            </div>
          )}
          <div className='flex flex-row w-full items-center justify-between'>
            <h4>{formatPrice(product.attributes?.price ?? 0)}</h4>
            <ButtonAddCart product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
