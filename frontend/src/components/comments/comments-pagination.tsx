'use client'
import { GetCommentsQuery } from '@/graphql/generated'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'

type Props = {
  pagination: NonNullable<GetCommentsQuery['comments']>['meta']['pagination']
  setPage?: (page: number) => void
}

export function CommentsPagination({ pagination, setPage }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const currentPage = Number(searchParams.get('commentsPage')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('commentsPage', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }
  return (
    <div className='flex flex-row w-full h-10 items-center'>
      <Button
        onClick={(e) => createPageURL(1)}
        variant={'outline'}
        size={'icon'}
      >
        <DoubleArrowLeftIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => (currentPage > 1 ? createPageURL(currentPage - 1) : '#')}
        variant={'outline'}
        size={'icon'}
      >
        <ChevronLeftIcon className='h-4 w-4' />
      </Button>
      <p className='px-4'>{`${pagination.page} из ${pagination.pageCount}`}</p>
      <Button
        onClick={() =>
          currentPage < pagination.pageCount
            ? createPageURL(currentPage + 1)
            : '#'
        }
        variant={'outline'}
        size={'icon'}
      >
        <ChevronRightIcon className='h-4 w-4' />
      </Button>
      <Button
        onClick={() => createPageURL(pagination.pageCount)}
        variant={'outline'}
        size={'icon'}
      >
        <DoubleArrowRightIcon className='h-4 w-4' />
      </Button>
    </div>
  )
}
