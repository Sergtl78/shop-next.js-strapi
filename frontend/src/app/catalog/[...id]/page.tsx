import ProductList from '@/components/product/product-list'
import { getProductsData } from '@/lib/api/product'

type Props = {
  params: { id: string[] }
}

const ProductsPage = async ({ params }: Props) => {
  const products = await getProductsData({
    categoryId: params.id[0],
    sub_categoryID: params.id[1],
  })
  return (
    <div className='flex min-h-screen w-full mx-4 my-8'>
      <ProductList data={products} />
    </div>
  )
}

export default ProductsPage
