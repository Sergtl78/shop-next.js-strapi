import { IconsType } from '@/components/Icons'

type UserMenu = {
  id: string
  title: string
  link: string
  icon: IconsType
}
export const userMenu: UserMenu[] = [
  { id: 'userProfile', title: 'Профиль', link: '/user', icon: 'user' },
  { id: 'orders', title: 'Заказы', link: '/orders', icon: 'cart' },
  {
    id: 'userComments',
    title: 'Комментарии',
    link: '/comments',
    icon: 'message',
  },
  {
    id: 'setting',
    title: 'Настройки',
    link: '/setting',
    icon: 'settings',
  },
]
