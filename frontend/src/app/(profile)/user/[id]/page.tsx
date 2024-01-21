import OrdersList from '@/components/user/order/orders-list'
import UserInfo from '@/components/user/user-info'

type Props = {
  params: { id: string }
}

const UserPage = ({ params }: Props) => {
  return (
    <section className='flex flex-1 my-8 ml-6 '>
      <div className='grid md:grid-cols-3 gap-4 w-full'>
        <UserInfo id={params.id} />
        <div className='md:col-span-2'>
          <OrdersList userId={params.id} />
        </div>
      </div>
    </section>
  )
}

export default UserPage
