import Link from 'next/link'
import { Icons } from './Icons'

type Props = {
  title: string
}

const Logo = ({ title }: Props) => {
  return (
    <Link href={'/'}>
      <div className='flex  flex-row gap-4 py-4 items-center justify-start'>
        <Icons.logo className='w-8 h-8 md:h-10 md:w-10 fill-primary' />
        <h1 className='text-lg md:text-3xl font-semibold'>{title}</h1>
      </div>
    </Link>
  )
}

export default Logo
