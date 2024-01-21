'use client'
import { Icon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { deleteAddress } from '@/lib/api/address'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
  userId: string
}

const ButtonDeleteAddress = ({ id, userId }: Props) => {
  const { refresh } = useRouter()
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => {
        deleteAddress({ id })
        refresh()
      }}
    >
      <Icon name='trash' className='w-4 h-4 mr-0' />
    </Button>
  )
}

export default ButtonDeleteAddress
