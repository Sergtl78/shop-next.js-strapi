type NameInput =
  | 'title'
  | 'region'
  | 'city'
  | 'street'
  | 'house'
  | 'apartment'
  | 'postal_code'
type AddressType = {
  id: string
  name: NameInput
  label: string
  placeholder: string
}
export const addressFormData: AddressType[] = [
  { id: 'title', name: 'title', label: 'Название', placeholder: 'Дом...' },
  {
    id: 'region',
    name: 'region',
    label: 'Область',
    placeholder: 'Московская обл.',
  },
  { id: 'city', name: 'city', label: 'Город', placeholder: 'Москва' },
  { id: 'street', name: 'street', label: 'Улица', placeholder: 'Ленина' },
  { id: 'house', name: 'house', label: 'Дом', placeholder: '10' },
  { id: 'apartment', name: 'apartment', label: 'Квартира', placeholder: '57' },
  {
    id: 'postal_code',
    name: 'postal_code',
    label: 'Почтовый код',
    placeholder: '123456',
  },
]
