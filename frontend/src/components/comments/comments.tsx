import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import CommentForm from './comment-form'
import CommentsList from './comments-list'

type Props = {
  productId?: string | null | undefined
}

const Comments = ({ productId }: Props) => {
  return (
    <section className='flex w-full mt-8 min-h-80 relative '>
      <Tabs defaultValue='comments' className='w-full max-w-sm md:max-w-2xl'>
        <TabsList>
          <TabsTrigger value='comments'>Отзывы</TabsTrigger>
          <TabsTrigger value='createComment'>Оставить отзыв</TabsTrigger>
        </TabsList>
        <TabsContent value='comments'>
          <CommentsList productId={productId} />
        </TabsContent>
        <TabsContent value='createComment'>
          <CommentForm productId={productId} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default Comments
