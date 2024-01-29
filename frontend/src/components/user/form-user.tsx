'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { updateUser } from '@/lib/api/user'
import { authActions } from '@/redux/features/auth-slice'
import { selectUser, useActionCreators, useAppSelector } from '@/redux/store'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  username: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
  email: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
})

type Props = {}

const FormUser = () => {
  const user = useAppSelector(selectUser)
  const actionsAuth = useActionCreators(authActions)
  const { refresh } = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: user?.data?.attributes?.username,
      email: user?.data?.attributes?.email,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!!user?.data?.id) {
      const userUpdate = await updateUser({ id: user.data.id, ...data })
      if (userUpdate) {
        actionsAuth.updateUser({
          data: user.data,
        })
      }
    }
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-background p-4'>
          <code className='text-foreground'>
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    })
    refresh()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-2 mb-6'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input placeholder='Ваше имя...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={'my_email@mail.com'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex w-full pt-4 items-center justify-between'>
          <DialogClose asChild>
            <Button type='button' variant='secondary' className='self-end'>
              {form.formState.isSubmitSuccessful ? 'Закрыть' : 'Отмена'}
            </Button>
          </DialogClose>
          <Button
            className='cursor-pointer active:scale-y-95'
            type='submit'
            disabled={!form.formState.isValid}
            //onClick={() => form.reset()}
          >
            {form.formState.isLoading && (
              <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
            )}
            Сохранить
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default FormUser
