import { ComponentSectionHeader } from '@/graphql/generated'

type Props = {
  data: ComponentSectionHeader
}

const Header = ({ data }: Props) => {
  return (
    <div className='container'>
      <h1 className='mb-4 mt-8'>{data.title}</h1>
    </div>
  )
}

export default Header
