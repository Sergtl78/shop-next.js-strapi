'use client'
import { ArrowDownNarrowWideIcon, ArrowUpWideNarrow } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Icon } from '../Icons'
import { Button } from '../ui/button'

const PriceFilter = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const [priceSort, setPriceSort] = useState<string | null>(
    searchParams.get('price_sort'),
  )

  const createPageURL = (priceSort: string) => {
    const params = new URLSearchParams(searchParams)
    if (priceSort === 'clear_price_sort') {
      params.delete('price_sort')
    } else {
      params.set('price_sort', priceSort.toString())
    }
    replace(`${pathname}?${params.toString()}`)
  }
  const sort = searchParams.get('price_sort')
  console.log(sort)

  return (
    <div className='flex flex-row items-center'>
      <Button
        variant={'outline'}
        size={'sm'}
        onClick={() => {
          if (!priceSort) {
            setPriceSort('price:asc')
          } else {
            setPriceSort(priceSort === 'price:asc' ? 'price:desc' : 'price:asc')
            createPageURL(priceSort)
          }
        }}
      >
        Цена
        {sort === 'price:asc' && (
          <ArrowDownNarrowWideIcon className='ml-2 w-4 h-4' />
        )}
        {sort === 'price:desc' && (
          <ArrowUpWideNarrow className='ml-2 w-4 h-4' />
        )}
      </Button>
      {(sort === 'price:asc' || sort === 'price:desc') && (
        <Icon
          name='close'
          className='ml-2 w-4 h-4 cursor-pointer'
          onClick={() => createPageURL('clear_price_sort')}
        />
      )}
    </div>
  )
}

export default PriceFilter
