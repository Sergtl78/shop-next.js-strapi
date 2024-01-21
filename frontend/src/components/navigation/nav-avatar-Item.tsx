'use client'

import { logout } from '@/lib/api/auth'
import { userMenu } from '@/lib/helpers/user-menu'
import { useAuthState } from '@/store/authState'
import Link from 'next/link'
import { Icon } from '../Icons'
import { DropdownMenuItem } from '../ui/dropdown-menu'

type Props = {}

export default function NavAvatarItem(props: Props) {
  const clearAuthData = useAuthState((state) => state.clearAuthData)
  const user = useAuthState((state) => state.user)
  console.log(user)

  return (
    <>
      {userMenu.map((menu) => (
        <Link key={menu.id} href={`${menu.link}/${user?.data?.id}`}>
          <DropdownMenuItem>
            <Icon name={menu.icon} className='mr-2 h-4 w-4' />
            <p>{menu.title}</p>
          </DropdownMenuItem>
        </Link>
      ))}

      <DropdownMenuItem
        onClick={() => {
          logout()
          clearAuthData()
        }}
      >
        <Icon name='logOut' className='mr-2 h-4 w-4' />
        <span>Выйти</span>
      </DropdownMenuItem>
    </>
  )
}
