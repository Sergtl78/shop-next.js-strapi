'use client'

import { Icons } from '../Icons'

import Link from 'next/link'
import { DropdownMenuItem, DropdownMenuShortcut } from '../ui/dropdown-menu'

type Props = {}

export default function NavAvatarItem(props: Props) {
  return (
    <>
      <Link href={'/user'}>
        <DropdownMenuItem>
          <Icons.user className='mr-2 h-4 w-4' />
          <span>Профиль</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </Link>
      <DropdownMenuItem>
        <Icons.settings className='mr-2 h-4 w-4' />
        <span>Настройки</span>
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icons.LifeBuoy className='mr-2 h-4 w-4' />
        <span>Поддержка</span>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => {}}>
        <Icons.logOut className='mr-2 h-4 w-4' />
        <span>Выйти</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  )
}
