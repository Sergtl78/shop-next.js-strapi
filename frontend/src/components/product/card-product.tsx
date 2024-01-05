import { GetProductQuery } from '@/graphql/generated'
import { formatPrice, getOldPrice } from '@/lib/utils'
import { Icons } from '../Icons'
import MediaImage from '../media-image'
import { Button } from '../ui/button'

type Props = {
  data: NonNullable<
    NonNullable<GetProductQuery['product']>['data']
  >['attributes']
}

const CardProduct = ({ data }: Props) => {
  if (!data) return null
  return (
    <div className='relative flex flex-col w-full h-full rounded-xl border bg-card text-card-foreground shadow overflow-hidden'>
      <MediaImage
        className='aspect-square object-cover'
        image={data.image.data[0].attributes}
      />
      <MediaImage
        className='aspect-square absolute top-0 left-0 w-10 h-10'
        image={data.collection?.data?.attributes?.icon?.data?.attributes}
      />
      <div className='flex flex-col w-full h-full items-center justify-between p-4 gap-2 '>
        <p>{data.name}</p>
        <div className='flex flex-col w-full'>
          {data.collection?.data?.attributes?.discount && (
            <div className='flex flex-row w-full items-center justify-between'>
              <span className='line-through '>
                {getOldPrice({
                  price: data.price ?? 0,
                  discount: data.collection?.data?.attributes?.discount ?? 0,
                })}
              </span>
              <span>{`— ${data.collection?.data?.attributes?.discount}%`}</span>
            </div>
          )}
          <div className='flex flex-row w-full items-center justify-between'>
            <h4>{formatPrice(data.price ?? 0)}</h4>
            <Button>
              <Icons.cart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
