import CartHeader from '@/components/cart/cart-header'
import CartList from '@/components/cart/cart-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

export default function CartPage(props: Props) {
  return (
    <section className='container  md:space-x-4 min-h-[80vh]'>
      <div className='flex my-4 flex-col w-full h-full space-y-4'>
        <CartHeader />
        <CartList isPage={true} />
        <div className='flex flex-row w-full items-center justify-end space-x-4'>
          <Link href={'/cart'}>
            <Button>Назад</Button>
          </Link>
          <Link href={'/cart/delivery'}>
            <Button>Далее</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
