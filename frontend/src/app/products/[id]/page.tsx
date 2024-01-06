import MediaImage from '@/components/media-image'
import CarouselProduct from '@/components/product/carousel_product'
import DescriptionProduct from '@/components/product/description-product'
import { getProductByIdData } from '@/lib/api/product'

type Props = {
  params: { id: string }
}

const ProductPage = async ({ params }: Props) => {
  const product = await getProductByIdData(params)
  return (
    <section className='container'>
      <div className='grid md:grid-cols-5 w-full pt-8'>
        <div className='col-span-2'>
          <CarouselProduct slides={product?.data?.attributes} />
        </div>
        <div className='col-span-3 md:pl-8'>
          <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row'>
              <h1>{product?.data?.attributes?.name}</h1>
              <MediaImage
                image={
                  product?.data?.attributes?.collection?.data?.attributes?.icon
                    ?.data?.attributes
                }
                className='w-10 h-10'
              />
            </div>
            <DescriptionProduct
              description={product?.data?.attributes?.description ?? ''}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
