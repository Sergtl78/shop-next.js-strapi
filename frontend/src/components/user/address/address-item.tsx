import Separator from '@/components/separator'
import { GetAddressQuery } from '@/graphql/generated'
import { formatDate } from '@/lib/api/api-helpers'
import ButtonDeleteAddress from './button-delete-address'
import DialogAddressUpdate from './dialog-address-update'

type Props = {
  address: NonNullable<GetAddressQuery['addresses']>['data'][0]
  userId: string
}

const AddressItem = ({ address, userId }: Props) => {
  return (
    <div className='flex flex-col w-full rounded-2xl  border p-4 '>
      <div className='flex flex-row items-center justify-between'>
        <b>{address.attributes?.title}</b>
        <ButtonDeleteAddress id={address.id || ''} userId={userId} />
      </div>
      <Separator />
      <p>Область: {address.attributes?.region} </p>
      <p>Город: {address.attributes?.city} </p>
      <p>Улица: {address.attributes?.street} </p>
      <p>Дом: {address.attributes?.house} </p>
      <p>Квартира: {address.attributes?.apartment} </p>
      <p>Почтовый код: {address.attributes?.postal_code} </p>
      <Separator />
      <div className='flex flex-row items-center justify-between'>
        <p>создан: {formatDate(address.attributes?.updatedAt)}</p>
        <DialogAddressUpdate data={address} />
      </div>
    </div>
  )
}

export default AddressItem
