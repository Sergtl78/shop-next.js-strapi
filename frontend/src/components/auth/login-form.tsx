'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
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
import { login } from '@/lib/api/auth'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: 'Email must be at least 3 characters.',
    })
    .email({ message: 'Wrong email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
})

export function LoginForm() {
  const addAuthData = useAuthStore((store) => store.addAuthData)
  const { back } = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const loginData = await login(data)
    if (loginData.jwt) {
      addAuthData({
        jwt: loginData.jwt || '',
        user: loginData.user,
        isAuth: true,
      })
      back()
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-6 mb-6'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='my@email.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full cursor-pointer active:scale-y-95'
          type='submit'
        >
          Войти
        </Button>
      </form>
    </Form>
  )
}
