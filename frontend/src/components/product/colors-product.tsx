'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ColorRelationResponseCollection } from '@/graphql/generated'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TooltipComponent } from '../tooitip-component'

type Props = {
  colors: ColorRelationResponseCollection
  sub_categoryId: string
  colorProduct: string
}

export function ColorsProduct({ colors, colorProduct, sub_categoryId }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageURL = ({
    colorId,
    sub_categoryId,
  }: {
    colorId: number | string
    sub_categoryId: string
  }) => {
    const params = new URLSearchParams(searchParams)
    params.delete('productId')
    params.set('sub_categoryId', sub_categoryId)
    params.set('colorId', colorId.toString())
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <ToggleGroup type='single' className='gap-x-2'>
      {colors?.data.map((color) => (
        <ToggleGroupItem
          key={color.id}
          value={color.attributes?.title ?? ''}
          aria-label={color.attributes?.title}
          className={
            color.attributes?.title === colorProduct
              ? 'border border-primary'
              : ''
          }
          onClick={() =>
            createPageURL({
              colorId: color.id || '',
              sub_categoryId: sub_categoryId || '',
            })
          }
        >
          <TooltipComponent text={color.attributes?.title || ''}>
            <div
              style={{
                background: color.attributes?.color || '',
              }}
              className='w-6 h-6 rounded-full border border-foreground '
            />
          </TooltipComponent>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
