import Comments from '@/components/comments/comments'
import MediaImage from '@/components/media-image'
import CarouselProduct from '@/components/product/carousel_product'
import { ColorsProduct } from '@/components/product/colors-product'
import Counter from '@/components/product/counter'
import DescriptionProduct from '@/components/product/description-product'
import { MemoriesProduct } from '@/components/product/memories-product'
import RecommendSlider from '@/components/recommend-slider'
import { getProductsData } from '@/lib/api/product'

type Props = {
  searchParams?: {
    productId?: string
    sub_categoryId?: string
    colorId?: string
    memoryId?: string
    commentsPage?: string
  }
}

const ProductPage = async ({ searchParams }: Props) => {
  const products = await getProductsData({
    productId: searchParams?.productId,
    sub_categoryId: searchParams?.sub_categoryId,
    colorId: searchParams?.colorId,
    memoryId: searchParams?.memoryId,
  })
  const product = products?.data[0]

  return (
    <section className='container'>
      <div className='grid md:grid-cols-5 w-full pt-8'>
        <div className='col-span-2'>
          <CarouselProduct slides={product?.attributes} />
        </div>
        <div className='col-span-3 md:pl-8'>
          <div className='flex flex-col w-full gap-4'>
            <div className='flex flex-row'>
              <h1>{product?.attributes?.name}</h1>
              {product?.attributes?.collections?.data.map((item) => (
                <div
                  key={item.attributes?.name}
                  className='flex flex-row gap-3'
                >
                  <MediaImage
                    image={item.attributes?.icon?.data?.attributes}
                    className='w-10 h-10'
                  />
                </div>
              ))}
            </div>
            <DescriptionProduct
              description={product?.attributes?.description ?? ''}
            />
            {product?.attributes?.sub_category?.data?.attributes?.colors &&
              product?.attributes?.color?.data && (
                <div className='flex flex-row gap-3 items-center '>
                  Цвет:
                  <ColorsProduct
                    sub_categoryId={
                      product.attributes.sub_category.data.id ?? ''
                    }
                    colorProduct={
                      product?.attributes?.color?.data?.attributes?.title ?? ''
                    }
                    colors={
                      product?.attributes?.sub_category?.data?.attributes
                        ?.colors
                    }
                  />
                </div>
              )}
            {product?.attributes?.sub_category?.data?.attributes?.memories &&
              product.attributes.memory?.data && (
                <div className='flex flex-row gap-3 items-center '>
                  Память:
                  <MemoriesProduct
                    memoryProduct={
                      product?.attributes?.memory?.data?.attributes?.title ?? ''
                    }
                    memories={
                      product?.attributes?.sub_category?.data?.attributes
                        ?.memories
                    }
                    sub_categoryId={
                      product.attributes.sub_category.data.id ?? ''
                    }
                  />
                </div>
              )}
          </div>
          <h4 className='mt-6'>Добавить в корзину</h4>
          {product && <Counter product={product} />}
        </div>
      </div>
      <RecommendSlider
        sub_categoryId={product?.attributes?.sub_category?.data?.id || ''}
      />
      <Comments
        sub_categoryId={product?.attributes?.sub_category?.data?.id || ''}
        commentsPage={searchParams?.commentsPage}
      />
    </section>
  )
}

export default ProductPage
