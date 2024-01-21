'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import FormAddress from './form-address'

type Props = {}

const DialogAddressCreate = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className='w-fit self-end'>
          <b className='text-xl mr-2'> + </b>
          Создать адрес
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Создать адрес</DialogTitle>
        </DialogHeader>
        <FormAddress />
      </DialogContent>
    </Dialog>
  )
}

export default DialogAddressCreate
