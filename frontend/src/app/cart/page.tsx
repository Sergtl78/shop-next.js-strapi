import { Icon } from '@/components/Icons'
import CartHeader from '@/components/cart/cart-header'
import CartList from '@/components/cart/cart-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

export default function CartPage(props: Props) {
  return (
    <section className='container  md:space-x-4 min-h-[80vh]'>
      <div className='flex my-4 flex-col w-full h-full space-y-4'>
        <div className='flex flex-row px-4 items-center justify-between'>
          <CartHeader />
          <Link href={'/catalog'}>
            <Button variant={'outline'}>
              <Icon name='arrowRight' className='w-4 h-4 rotate-180 mr-2' />
              Каталог
            </Button>
          </Link>
        </div>
        <CartList isPage={true} />
        <div className='flex flex-row w-full items-center justify-end space-x-4'>
          <Link href={'/cart/delivery'}>
            <Button>Выберите доставку</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
