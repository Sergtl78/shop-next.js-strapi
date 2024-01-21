type Props = {
  params: { id: string }
}

const OrdersPage = ({ params }: Props) => {
  return <div>OrdersPage{params.id}</div>
}

export default OrdersPage
