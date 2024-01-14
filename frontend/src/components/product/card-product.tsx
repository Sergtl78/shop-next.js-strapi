import { GetProductsQuery } from '@/graphql/generated'
import { formatPrice, getOldPrice } from '@/lib/utils'
import { StarIcon } from 'lucide-react'
import Link from 'next/link'
import MediaImage from '../media-image'
import ButtonAddCart from './ButtonAddCart'

type Props = {
  data: NonNullable<GetProductsQuery['products']>['data'][0]
}

const CardProduct = ({ data }: Props) => {
  const product = data
  if (!product) return null
  const discount =
    product.attributes?.collections?.data.reduce(
      (acc, item) => (acc += item.attributes?.discount || 0),
      0,
    ) ?? 0
  return (
    <div className='relative flex flex-col w-full h-full rounded-xl border bg-card text-card-foreground shadow overflow-hidden'>
      <Link href={`/products?productId=${product.id}`}>
        <MediaImage
          className='aspect-square object-cover'
          image={product.attributes?.image.data[0].attributes}
        />
      </Link>
      <div className='flex flex-col gap-2 absolute top-0 left-0'>
        {product.attributes?.collections?.data.map((collection, ind) => (
          <MediaImage
            key={collection.attributes?.name ?? '' + ind}
            className='aspect-square w-10 h-10 relative'
            image={collection.attributes?.icon?.data?.attributes}
          />
        ))}
      </div>
      <div className='flex flex-row items-center absolute top-0 right-2'>
        <StarIcon className='w-5 h-5 fill-yellow-500 text-yellow-500 mr-1' />
        <b>{product.attributes?.rating ?? 0}</b>
      </div>

      <div className='flex flex-col w-full h-full items-center justify-between px-4 py-2 gap-2 '>
        <p className='ml-4'>{product.attributes?.name}</p>
        <div className='flex flex-col w-full'>
          {discount > 0 && (
            <div className='flex flex-row w-full items-center justify-between'>
              <p className='line-through '>
                {getOldPrice({
                  price: product.attributes?.price ?? 0,
                  discount: discount,
                })}
              </p>
              <i>{`— ${discount}%`}</i>
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
