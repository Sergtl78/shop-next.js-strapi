import ProductList from '@/components/product/product-list'
import { getProductsData } from '@/lib/api/product'

type Props = {
  params: { id: string[] }
  searchParams?: {
    query?: string
    page?: string
    price_sort?: string
  }
}

const ProductsPage = async ({ params, searchParams }: Props) => {
  const products = await getProductsData({
    categoryId: params.id[0],
    sub_categoryId: params.id[1],
    query: searchParams?.query,
    page: Number(searchParams?.page),
    pageSize: 10,
    sort: searchParams?.price_sort,
  })
  return (
    <div className='flex flex-col min-h-screen w-full mb-8'>
      <ProductList data={products} />
    </div>
  )
}

export default ProductsPage
