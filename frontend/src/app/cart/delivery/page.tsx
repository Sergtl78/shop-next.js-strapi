//import DeliveriesList from '@/components/delivery/deliveries-list'
import { Icon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { getDeliveries } from '@/lib/api/delivery'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const DeliveriesList = dynamic(
  () => import('@/components/delivery/deliveries-list'),
  {
    ssr: false,
  },
)
const DeliveriesAddressList = dynamic(
  () => import('@/components/delivery/deliveries-address-list'),
  {
    ssr: false,
  },
)
type Props = {}

const DeliveryPage = async (props: Props) => {
  const deliveries = await getDeliveries()
  return (
    <div className='flex flex-col w-full gap-4 mt-8'>
      <div className='flex w-full flex-col-reverse md:flex-row items-center justify-between px-4'>
        <h2>Выберите доставку</h2>
        <Link href={'/cart'}>
          <Button variant={'outline'} size={'sm'}>
            <Icon name='arrowRight' className='rotate-180 mr-2 w-4 h-4' />
            Назад
          </Button>
        </Link>
      </div>
      <DeliveriesList deliveries={deliveries} />
      <DeliveriesAddressList />
    </div>
  )
}

export default DeliveryPage
