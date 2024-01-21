import Address from './address/address'
import UserProfile from './user-profile'

type Props = {
  id: string
}

const UserInfo = async ({ id }: Props) => {
  return (
    <div className='flex flex-col w-full items-center justify-start'>
      <UserProfile id={id} />
      <Address userId={id} />
    </div>
  )
}

export default UserInfo
