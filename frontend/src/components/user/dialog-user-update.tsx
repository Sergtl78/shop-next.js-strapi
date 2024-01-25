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
import FormUser from './form-user'

type Props = {}

const DialogUserUpdate = ({}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} size={'icon'} className='justify-center'>
          <Icon name='pencil' className='w-4 h-4 mr-0' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Изменить данные</DialogTitle>
        </DialogHeader>
        <FormUser />
      </DialogContent>
    </Dialog>
  )
}

export default DialogUserUpdate
