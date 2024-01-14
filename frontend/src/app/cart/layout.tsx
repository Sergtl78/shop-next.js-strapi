import CartTotal from '@/components/cart/cart-total'

export const metadata = {
  title: 'Cart',
  description: 'Shop cart',
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='container grid md:grid-cols-4 lg:grid-cols-5'>
      <div className='md:col-span-3 lg:col-span-4'>{children}</div>
      <div className='relative flex my-4 w-full h-full'>
        <CartTotal />
      </div>
    </section>
  )
}
