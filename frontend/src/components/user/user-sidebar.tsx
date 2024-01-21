'use client'
import { userMenu } from '@/lib/helpers/user-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '../Icons'

type Props = {
  id: string
}

const UserSidebar = ({ id }: Props) => {
  const pathname = usePathname()
  return (
    <aside className='w-1/6 h-full  mt-8  border-r px-4'>
      <nav className='flex flex-col gap-4 w-full h-full'>
        {userMenu.map((menu) => (
          <Link key={menu.id} href={`${menu.link}/${id}`}>
            <div
              className={cn(
                'flex flex-row items-center rounded-md px-4 py-2 hover:bg-muted',
                pathname.includes(menu.link) ? 'text-primary' : '',
              )}
            >
              <Icon name={menu.icon} className='w-4 h-4 mr-2 ' />
              <p>{menu.title}</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default UserSidebar
