'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEnd,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationStart,
} from '@/components/ui/pagination'
import { GetProductsQuery } from '@/graphql/generated'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  data: NonNullable<GetProductsQuery['products']>['meta']['pagination']
}

export function ProductPagination({ data }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationStart
          href={createPageURL(1)}
          className={currentPage === 1 ? 'cursor-not-allowed' : ''}
        />
        <PaginationPrevious
          href={currentPage > 1 ? createPageURL(currentPage - 1) : '#'}
          className={currentPage === 1 ? 'cursor-not-allowed' : ''}
        />
        <PaginationLink href={''}>
          {`${data.page}  из ${data.pageCount}`}
        </PaginationLink>

        <PaginationNext
          href={
            currentPage < data.pageCount ? createPageURL(currentPage + 1) : '#'
          }
          className={currentPage === data.pageCount ? 'cursor-not-allowed' : ''}
        />
        <PaginationEnd
          href={createPageURL(data.pageCount)}
          className={currentPage === data.pageCount ? 'cursor-not-allowed' : ''}
        />
      </PaginationContent>
    </Pagination>
  )
}
