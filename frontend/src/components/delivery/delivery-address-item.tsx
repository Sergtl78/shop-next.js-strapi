import Separator from '@/components/separator'
import { GetAddressQuery } from '@/graphql/generated'
import { formatDate } from '@/lib/api/api-helpers'
import ButtonDeleteAddress from '../user/address/button-delete-address'
import DialogAddressUpdate from '../user/address/dialog-address-update'

type Props = {
  address: NonNullable<GetAddressQuery['addresses']>['data'][0]
  userId: string
}

const DeliveryAddressItem = ({ address, userId }: Props) => {
  return (
    <div className='flex flex-col w-full rounded-2xl '>
      <div className='flex flex-row items-center justify-between'>
        <b>{address.attributes?.title}</b>
        <ButtonDeleteAddress id={address.id || ''} userId={userId} />
      </div>
      <Separator />
      <div className='flex flex-col md:flex-row'>
        <p>
          `{address.attributes?.region} {address.attributes?.city}`
        </p>

        <p>
          `Улица {address.attributes?.street} Дом {address.attributes?.house}{' '}
          Квартира {address.attributes?.apartment}`
        </p>
        <p>Почтовый код: {address.attributes?.postal_code} </p>
      </div>
      <Separator />
      <div className='flex flex-row items-center justify-between'>
        <p>создан: {formatDate(address.attributes?.updatedAt)}</p>
        <DialogAddressUpdate data={address} />
      </div>
    </div>
  )
}

export default DeliveryAddressItem
