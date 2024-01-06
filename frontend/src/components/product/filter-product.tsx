import PriceFilter from './price-filter'
import SearchProduct from './search-product'

type Props = {}

const FiltersProduct = (props: Props) => {
  return (
    <section className='flex flex-col md:flex-row w-full items-center justify-center md:justify-between px-6 py-2 my-4'>
      <PriceFilter />
      <SearchProduct />
    </section>
  )
}

export default FiltersProduct
