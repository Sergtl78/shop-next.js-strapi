import { formatDate } from '@/lib/api/api-helpers'
import { getCommentsData } from '@/lib/api/comments'
import { StarIcon } from 'lucide-react'
import Separator from '../separator'

type Props = {
  productId?: string | null | undefined
}

const CommentsList = async ({ productId }: Props) => {
  const comments = await getCommentsData(productId ?? '')
  return (
    <div className='flex flex-col px-4 w-full '>
      {comments?.data && comments?.data.length < 1 ? (
        <div className='flex w-full items-center justify-start'>
          <p>Пока еще нет отзывов</p>
        </div>
      ) : (
        <ul className='flex flex-col w-full gap-2'>
          {comments?.data.map((comment) => (
            <li
              key={comment.id}
              className='flex flex-col p-4 border rounded-2xl'
            >
              <div className='flex flex-row gap-4 items-center'>
                <div className='flex flex-row gap-2 items-center'>
                  <i>{comment.attributes?.rate}</i>
                  <StarIcon className=' w-4 h-4 fill-yellow-500 text-yellow-500' />
                </div>
                <b>
                  {
                    comment.attributes?.users_permissions_user?.data?.attributes
                      ?.username
                  }
                </b>
                <i>{formatDate(comment.attributes?.publishedAt)}</i>
              </div>
              <Separator />
              <p>{comment.attributes?.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CommentsList
