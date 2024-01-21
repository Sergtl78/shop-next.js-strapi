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
import { GetAddressQuery } from '@/graphql/generated'
import { createAddress, updateAddress } from '@/lib/api/address'
import { addressFormData } from '@/lib/helpers/form-data'
import { useAuthState } from '@/store/authState'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  title: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
  region: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
  city: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
  street: z.string().min(3, {
    message: 'Не менее 3х символов.',
  }),
  house: z.string().min(1, {
    message: 'Не менее 1 символа.',
  }),
  apartment: z.string().min(1, {
    message: 'Не менее 1 символа.',
  }),
  postal_code: z.string().min(6, { message: 'Должно быть 6 символов' }),
})
type Props = {
  updateData?: NonNullable<GetAddressQuery['addresses']>['data'][0]
}
const FormAddress = ({ updateData }: Props) => {
  const user = useAuthState((store) => store.user)
  const { refresh } = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: updateData?.attributes?.title ?? '',
      region: updateData?.attributes?.region ?? '',
      city: updateData?.attributes?.city ?? '',
      street: updateData?.attributes?.street ?? '',
      house: updateData?.attributes?.house ?? '',
      apartment: updateData?.attributes?.apartment ?? '',
      postal_code: updateData?.attributes?.postal_code ?? '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    updateData?.id
      ? await updateAddress({
          id: updateData?.id,
          data,
        })
      : await createAddress({
          ...data,
          users_permissions_user: user?.data?.id,
        })
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
        {addressFormData.map((data) => (
          <FormField
            key={data.id}
            control={form.control}
            name={data.name}
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel>{data.label}</FormLabel>
                <FormControl>
                  <Input placeholder={data.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

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

export default FormAddress
