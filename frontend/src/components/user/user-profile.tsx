import { getUserById } from '@/lib/api/user'
import { Icon } from '../Icons'
import MediaImage from '../media-image'
import DialogUserUpdate from './dialog-user-update'

type Props = {
  id: string
}

const UserProfile = async ({ id }: Props) => {
  const user = await getUserById({
    id,
  })

  return (
    <div className='flex flex-col w-full items-center justify-start p-4 border rounded-2xl'>
      {user?.data?.attributes?.avatar?.data?.attributes ? (
        <MediaImage
          image={user?.data?.attributes?.avatar?.data?.attributes}
          className='w-20 h-20 rounded-full border'
        />
      ) : (
        <div className='w-20 h-20 rounded-full border p-2'>
          <Icon
            name='smile'
            className='w-full h-full stroke-1 stroke-muted-foreground'
          />
        </div>
      )}
      <h2>{user?.data?.attributes?.username}</h2>
      <p>{user?.data?.attributes?.email}</p>
      <div className='flex w-full justify-end'>
        <DialogUserUpdate />
      </div>
    </div>
  )
}

export default UserProfile
