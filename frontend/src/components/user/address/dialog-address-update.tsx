'use client'

import { Icon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { GetAddressQuery } from '@/graphql/generated'
import FormAddress from './form-address'

type Props = {
  data: NonNullable<GetAddressQuery['addresses']>['data'][0]
}

const DialogAddressUpdate = ({ data }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} size={'icon'} className='justify-center'>
          <Icon name='pencil' className='w-4 h-4 mr-0' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Создать адрес</DialogTitle>
        </DialogHeader>
        <FormAddress updateData={data} />
      </DialogContent>
    </Dialog>
  )
}

export default DialogAddressUpdate
