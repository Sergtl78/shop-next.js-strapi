'use client'

import { logout } from '@/lib/api/auth'
import { userMenu } from '@/lib/helpers/user-menu'
import { authActions, selectUser } from '@/redux/features/auth-slice'
import { cartActions } from '@/redux/features/cart-slice'
import { deliveryActions } from '@/redux/features/delivery-slice'
import Link from 'next/link'
import { useActionCreators, useAppSelector } from '../../redux/hooks'
import { Icon } from '../Icons'
import { DropdownMenuItem } from '../ui/dropdown-menu'

type Props = {}

export default function NavAvatarItem(props: Props) {
  const actionsAuth = useActionCreators(authActions)
  const actionsCart = useActionCreators(cartActions)
  const actionsDelivery = useActionCreators(deliveryActions)

  const user = useAppSelector(selectUser)

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
          actionsAuth.clearAuthData()
          actionsCart.clearCart()
          actionsDelivery.clearDelivery()
        }}
      >
        <Icon name='logOut' className='mr-2 h-4 w-4' />
        <span>Выйти</span>
      </DropdownMenuItem>
    </>
  )
}
