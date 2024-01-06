'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import NavAvatarItem from './nav-avatar-Item'

export function AvatarUser() {
  const isAuth = false
  return (
    <div className='flex items-center justify-center'>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='@shadcn'
                className='cursor-pointer'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-background p-2 '>
            <NavAvatarItem />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={'/login'}>
          <Avatar className='border border-border flex items-center justify-center hover:bg-muted'>
            <PersonIcon className='w-4 h-4' />
          </Avatar>
        </Link>
      )}
    </div>
  )
}
