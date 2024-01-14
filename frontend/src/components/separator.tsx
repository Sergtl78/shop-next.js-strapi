import { cn } from '@/lib/utils'

type Props = {
  variant?: 'horizontal' | 'vertical'
  className?: string
}

const Separator = ({ variant = 'horizontal', className }: Props) => {
  return (
    <div
      className={cn(
        variant === 'vertical' ? 'w-px h-full' : 'w-full h-px',
        'bg-border m-2',
        className,
      )}
    />
  )
}

export default Separator
