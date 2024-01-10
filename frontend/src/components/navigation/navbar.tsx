import { getCategoriesData } from '@/lib/api/categories'
import { getALLProductsData } from '@/lib/api/product'
import Cart from '../cart/cart'
import Logo from '../logo'
import { ModeToggle } from './mode-toggle'
import { AvatarUser } from './nav-avatar-user'
import NavMenu from './nav-menu'
import { SearchNav } from './search-nav'

const Navbar = async () => {
  const [categories, products] = await Promise.all([
    getCategoriesData(),
    getALLProductsData({}),
  ])
  return (
    <nav className='sticky left-0 top-0 z-20 flex h-16 w-full border-b border-border bg-background px-4 py-2 shadow md:h-20'>
      <div className='container flex items-center justify-between'>
        <Logo title='Super Shop' />
        <NavMenu />
        <div className='flex flex-row gap-4 items-center'>
          {categories && products && (
            <SearchNav
              products={products?.data}
              categories={categories?.data}
            />
          )}
          <Cart />
          <AvatarUser />
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
