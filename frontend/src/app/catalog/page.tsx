import ProductList from '@/components/product/product-list'
import { getProductsData } from '@/lib/api/product'
import { Suspense } from 'react'

type Props = {
  searchParams?: {
    query?: string
    page?: string
    price_sort?: string
  }
}

const CatalogPage = async ({ searchParams }: Props) => {
  const products = await getProductsData({
    query: searchParams?.query,
    page: Number(searchParams?.page),
    pageSize: 10,
    sort: searchParams?.price_sort,
  })

  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  return (
    <section className=' w-full relative mb-8 '>
      <Suspense
        key={query + currentPage}
        fallback={<div>Loading products...</div>}
      >
        <ProductList data={products} />
      </Suspense>
    </section>
  )
}

export default CatalogPage
