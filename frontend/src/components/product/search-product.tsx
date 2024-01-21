'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Icon } from '../Icons'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type Props = {}

const SearchProduct = (props: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <>
      <Label className='relative'>
        <Input
          type='search'
          className='pl-10  md:min-w-80'
          placeholder='Название...'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <Icon
          name='search'
          className='w-6 h-6 left-2 absolute top-1/2 -translate-y-1/2 stroke-muted-foreground'
        />
      </Label>
    </>
  )
}

export default SearchProduct
