import { GetProductsQuery } from '../../graphql/generated'
import CardProduct from './card-product'
type Props = {
  data: GetProductsQuery['products']
}

const ProductList = async ({ data }: Props) => {
  return (
    <section className='flex w-full h-full'>
      <ul className='grid md:grid-cols-4 gap-4'>
        {data?.data.map((product) => (
          <li key={product.attributes?.slug}>
            <CardProduct data={product.attributes} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
