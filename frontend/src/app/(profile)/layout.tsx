import UserSidebar from '@/components/user/user-sidebar'
import { ReactNode } from 'react'

type Props = {
  params: { id: string }
  children: ReactNode
}

const UserLayout = ({ children, params }: Props) => {
  return (
    <section className='container flex w-full  min-h-screen'>
      <UserSidebar id={params.id} />
      {children}
    </section>
  )
}

export default UserLayout
