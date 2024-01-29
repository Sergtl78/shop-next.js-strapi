'use client'
import { selectUser } from '@/redux/features/auth-slice'
import { useAppSelector } from '@/redux/hooks'
import { PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '../Icons'
import MediaImage from '../media-image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import NavAvatarItem from './nav-avatar-Item'
export function AvatarUser() {
  const isAuth = useAppSelector((store) => store.auth.isAuth)
  const user = useAppSelector(selectUser)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex items-center justify-center w-8 h-8 rounded-full border '>
              {user?.data?.attributes?.avatar?.data?.attributes ? (
                <MediaImage
                  image={user?.data?.attributes?.avatar?.data?.attributes}
                  className='cursor-pointer w-8 h-8 rounded-full '
                />
              ) : (
                <Icon
                  name='smile'
                  className='w-full h-full stroke-2 stroke-muted-foreground'
                />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-background p-2 '>
            <NavAvatarItem />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={'/login'}>
          <PersonIcon className='w-6 h-6' />
        </Link>
      )}
    </>
  )
}
