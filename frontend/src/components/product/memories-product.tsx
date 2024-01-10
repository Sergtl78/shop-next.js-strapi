'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { MemoryRelationResponseCollection } from '@/graphql/generated'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  memories: MemoryRelationResponseCollection
  memoryProduct: string
  sub_categoryId: string
}

export function MemoriesProduct({
  memories,
  memoryProduct,
  sub_categoryId,
}: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageURL = ({
    memoryId,
    sub_categoryId,
  }: {
    memoryId: number | string
    sub_categoryId: string
  }) => {
    const params = new URLSearchParams(searchParams)
    params.delete('productId')
    params.set('sub_categoryId', sub_categoryId)
    params.set('memoryId', memoryId.toString())
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <ToggleGroup type='single' className='gap-x-2'>
      {memories?.data.map((memory) => (
        <ToggleGroupItem
          key={memory.attributes?.title}
          value={memory.attributes?.title ?? ''}
          aria-label={memory.attributes?.title}
          className={
            memory.attributes?.title === memoryProduct
              ? 'border border-primary'
              : ''
          }
          onClick={() =>
            createPageURL({
              memoryId: memory.id || '',
              sub_categoryId: sub_categoryId || '',
            })
          }
        >
          <div className=' h-6 rounded-xl text-foreground'>
            {memory.attributes?.title}
          </div>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
