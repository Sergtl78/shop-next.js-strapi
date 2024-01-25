import { getCategoriesData } from '@/lib/api/categories'
import { getALLProductsData } from '@/lib/api/product'
import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import CartSheet from '../cart/cart-sheet'
import { AvatarUser } from './nav-avatar-user'
import { SearchNav } from './search-nav'

type Props = {}

const MobileNav = async ({}: Props) => {
  const [categories, products] = await Promise.all([
    getCategoriesData(),
    getALLProductsData({}),
  ])
  return (
    <nav className='sticky bottom-0 left-0 z-30 md:hidden grid grid-cols-4 min-h-14 bg-background border-t py-4'>
      <Link href={'/'}>
        <div className='flex w-full h-full items-center justify-center'>
          <HomeIcon className=' w-6 h-6' />
        </div>
      </Link>
      <div className='flex w-full h-full items-center justify-center'>
        {categories && products && (
          <SearchNav products={products?.data} categories={categories?.data} />
        )}
      </div>
      <div className='flex w-full h-full items-center justify-center'>
        <CartSheet />
      </div>
      <div className='flex w-full h-full items-center justify-center'>
        <AvatarUser />
      </div>
    </nav>
  )
}

export default MobileNav
