import { getAddress } from '@/lib/api/address'
import AddressItem from './address-item'
import DialogAddressCreate from './dialog-address-create'

type Props = {
  userId: string
}

const Address = async ({ userId }: Props) => {
  const address = await getAddress({ id: userId })
  return (
    <ul className='flex flex-col w-full gap-4 mt-4'>
      <h4>Адреса для доставки:</h4>
      {address?.data && address?.data.length > 0 ? (
        address?.data.map((address) => (
          <li key={address.id}>
            <AddressItem address={address} userId={userId} />
          </li>
        ))
      ) : (
        <div className='flex flex-col gap-4'>
          <p>Нет сохраненных адресов</p>
        </div>
      )}
      <DialogAddressCreate />
    </ul>
  )
}

export default Address
