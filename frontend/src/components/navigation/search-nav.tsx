'use client'
import { GetCategoriesQuery, GetProductsQuery } from '@/graphql/generated'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '../Icons'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'

type Props = {
  categories: NonNullable<GetCategoriesQuery['categories']>['data']
  products: NonNullable<GetProductsQuery['products']>['data']
}

export function SearchNav({ categories, products }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Icon
        name='search'
        onClick={() => setOpen(true)}
        className='w-6 h-6 cursor-pointer'
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {categories.map((category) => (
              <div key={category.id}>
                <Link
                  key={category.attributes?.slug}
                  onClick={() => setOpen(false)}
                  href={`/catalog/${category.id}`}
                >
                  <CommandItem className='hover:cursor-pointer'>
                    {category.attributes?.name}
                  </CommandItem>
                </Link>
                {/*  <div> */}
                {category.attributes?.sub_categories?.data.map(
                  (sub_category) => (
                    <Link
                      onClick={() => setOpen(false)}
                      key={sub_category.attributes?.slug}
                      href={`/catalog/${category.id}/${sub_category.id}`}
                    >
                      <CommandItem className='cursor-pointer'>
                        {sub_category.attributes?.name}
                      </CommandItem>
                    </Link>
                  ),
                )}
                {/* </div> */}
              </div>
            ))}
            {products.map((product) => (
              <Link
                key={product.attributes?.slug}
                onClick={() => setOpen(false)}
                href={`/products/${product.id}`}
              >
                <CommandItem className='cursor-pointer'>
                  {product.attributes?.name}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
