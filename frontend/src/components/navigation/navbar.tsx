import Logo from '../logo'
import { ModeToggle } from './mode-toggle'
import { AvatarUser } from './nav-avatar-user'
import NavMenu from './nav-menu'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='sticky left-0 top-0 z-20 flex h-16 w-full border-b border-border bg-background px-4 py-2 shadow md:h-20'>
      <div className='container flex items-center justify-between'>
        <Logo title='Super Shop' />
        <NavMenu />
        <div className='flex flex-row gap-4 items-center'>
          <AvatarUser />
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
