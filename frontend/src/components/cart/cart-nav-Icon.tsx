'use client'
import { useEffect, useState } from 'react'
import { Icon } from '../Icons'
import { Button } from '../ui/button'
import BadgeIcon from './badge-icon'

const CartNavIcon = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <div className='relative flex w-8 h-8 items-center justify-center'>
          <Button variant={'ghost'} size={'icon'}>
            <Icon name='cart' className='w-6 h-6 fill-foreground' />
          </Button>
          <BadgeIcon />
        </div>
      ) : (
        <div className='h-8 w-8 animate-pulse' />
      )}
    </>
  )
}

export default CartNavIcon
