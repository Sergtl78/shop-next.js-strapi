'use client'
import { cn } from '@/lib/utils'
import { selectTotalQuantity } from '@/redux/features/cart-slice'
import { useAppSelector } from '@/redux/hooks'

type Props = {
  className?: string
}

const BadgeIcon = ({ className }: Props) => {
  const cartItemTotal = useAppSelector(selectTotalQuantity)
  return (
    <div
      className={cn(
        'absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-primary border-primary border-2 ',
        className,
      )}
    >
      <span className='text-xs font-bold text-primary-foreground'>
        {cartItemTotal}
      </span>
    </div>
  )
}

export default BadgeIcon
