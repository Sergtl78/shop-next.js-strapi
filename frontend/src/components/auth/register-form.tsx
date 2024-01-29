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
import { register } from '@/lib/api/auth'
import { authActions } from '@/redux/features/auth-slice'
import { useActionCreators } from '@/redux/hooks'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
  username: z.string().min(3, {
    message: 'Email must be at least 3 characters.',
  }),
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

export function RegisterForm() {
  const actions = useActionCreators(authActions)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const registerData = await register(data)
      if (registerData.jwt) {
        actions.addAuthData({
          jwt: registerData.jwt || '',
          user: {
            data: {
              attributes: {
                email: registerData.user.email || '',
                username: registerData.user.username,
              },
            },
          },
          isAuth: true,
        })
        redirect('/')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message,
        })
      }
      throw error
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-6 mb-6'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name ...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          Регистрация
        </Button>
      </form>
    </Form>
  )
}
