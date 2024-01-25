import { ComponentSectionCategories } from '@/graphql/generated'
import Link from 'next/link'
import MediaImage from '../media-image'
import { Button } from '../ui/button'

type Props = {
  data: ComponentSectionCategories
}

const CategoriesBlock = ({ data }: Props) => {
  return (
    <section className='container mt-8'>
      <div className='flex flex-col w-full '>
        <h2 className=''>{data.title}</h2>
        <p className='mb-4'>{data.description}</p>
        <ul className='grid md:grid-cols-3 gap-4 w-full'>
          {data.categories?.data.map((category) => (
            <Link
              href={`/catalog/${category.id}`}
              key={category.attributes?.slug}
            >
              <li className='flex flex-col hover:shadow-md'>
                <div className=' relative w-full rounded-2xl overflow-hidden bg-white px-4 py-2'>
                  <MediaImage
                    className='object-contain aspect-video'
                    image={category.attributes?.image?.data?.attributes}
                  />
                </div>

                <Button className='w-full' variant={'outline'}>
                  {category.attributes?.name}
                </Button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoriesBlock
