import { GetProductsQuery } from '../../graphql/generated'
import CardProduct from './card-product'
import { ProductPagination } from './product-pagination'

type Props = {
  data: GetProductsQuery['products']
}

const ProductList = async ({ data }: Props) => {
  return (
    <section className='flex flex-col w-full h-full gap-4 px-6'>
      {data && data.meta.pagination.pageCount > 1 && (
        <ProductPagination data={data.meta.pagination} />
      )}
      <ul className='grid md:grid-cols-5 gap-4'>
        {data?.data.map((product) => (
          <li key={product.attributes?.slug}>
            <CardProduct data={product.attributes} id={product.id} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
