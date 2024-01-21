'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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
import { addComment } from '@/lib/api/comments'
import { useAuthState } from '@/store/authState'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Textarea } from '../ui/textarea'
import { toast } from '../ui/use-toast'
import Rating from './Rating'

const FormSchema = z.object({
  content: z.string().min(3, { message: 'Должно быть не менее 3 символов.' }),
})
type Props = {
  sub_categoryId: string | null | undefined
}
const CommentForm = ({ sub_categoryId }: Props) => {
  const user = useAuthState((state) => state.user)
  const jwt = useAuthState((state) => state.jwt)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //
    if (!sub_categoryId) throw new Error('Нет sub_categoryId')
    if (user && user?.data?.id) {
      const comment = await addComment({
        userId: user.data.id,
        sub_categoryId: sub_categoryId ?? '',
        content: data.content,
        rate: rating,
      })

      toast({
        description: JSON.stringify(comment),
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 border border-border px-4 py-2'
      >
        <h3>Оставьте свой отзыв</h3>
        <Rating onClick={handleRating} />

        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваш отзыв.</FormLabel>
              <FormControl>
                <Textarea placeholder='Комментарий' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!user && (
          <div className='text-destructive flex flex-row gap-4'>
            <p>Чтобы отправить отзыв,</p>
            <Link href={'/login'} className='underline underline-offset-4'>
              авторизуйтесь
            </Link>
          </div>
        )}
        <Button
          type='submit'
          disabled={!user?.data?.id || rating < 1 || form.formState.isSubmitted}
        >
          Отправить отзыв
        </Button>
      </form>
    </Form>
  )
}
export default CommentForm
