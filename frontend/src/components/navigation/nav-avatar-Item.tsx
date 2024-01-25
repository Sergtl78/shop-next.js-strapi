'use client'

import { logout } from '@/lib/api/auth'
import { userMenu } from '@/lib/helpers/user-menu'
import { useAuthState } from '@/store/authState'
import { useCartStore } from '@/store/cartState'
import { useDeliveryState } from '@/store/deliveryState'
import Link from 'next/link'
import { Icon } from '../Icons'
import { DropdownMenuItem } from '../ui/dropdown-menu'

type Props = {}

export default function NavAvatarItem(props: Props) {
  const clearAuthData = useAuthState((state) => state.clearAuthData)
  const clearCart = useCartStore((state) => state.clearCart)
  const clearDelivery = useDeliveryState((state) => state.clear)

  const user = useAuthState((state) => state.user)

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
          clearCart()
          clearDelivery()
        }}
      >
        <Icon name='logOut' className='mr-2 h-4 w-4' />
        <span>Выйти</span>
      </DropdownMenuItem>
    </>
  )
}
