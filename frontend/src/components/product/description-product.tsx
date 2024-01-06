'use client'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Button } from '../ui/button'

type Props = {
  description?: string
}

const DescriptionProduct = ({ description }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col'>
      <h3>Описание:</h3>
      <p className={cn('m-0', !open ? 'text-ellipsis line-clamp-3' : '')}>
        {description}
      </p>
      <Button
        variant={'ghost'}
        size={'sm'}
        onClick={() => setOpen(!open)}
        className='text-end cursor-pointer w-fit self-end'
      >
        {open ? 'Скрыть' : 'Подробнее...'}
      </Button>
    </div>
  )
}

export default DescriptionProduct
