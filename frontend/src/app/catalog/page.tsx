import ProductList from '@/components/product/product-list'
import { getProductsData } from '@/lib/api/product'

type Props = {}

const CatalogPage = async (props: Props) => {
  const products = await getProductsData({})
  return (
    <section className='min-h-screen w-full relative my-8 mx-4'>
      <ProductList data={products} />
    </section>
  )
}

export default CatalogPage
