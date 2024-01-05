import { getCategoriesData } from '@/lib/api/categories'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

type Props = {}

const SideBar = async (props: Props) => {
  const categories = await getCategoriesData()

  return (
    <aside className='flex flex-col  p-4 min-h-[80vh] w-full max-w-xs mt-8'>
      <nav>
        <Accordion type='single' collapsible className='w-full'>
          <Link
            className='focus:bg-accent focus:text-primary'
            href={`/catalog`}
          >
            <div
              key={'Вся категория'}
              className='flex flex-1 items-center rounded-md text-base  py-4 pl-4 pr-4 font-medium transition-all hover:text-accent-foreground hover:bg-accent  focus:bg-accent focus:text-accent-foreground'
            >
              Все товары
            </div>
          </Link>
          {categories?.data.map(
            (category, index) =>
              category.attributes?.products?.data.length !== 0 && (
                <AccordionItem
                  value={`item-${index}`}
                  key={category.attributes?.name}
                >
                  <Link
                    className='focus:bg-accent focus:text-primary'
                    href={
                      category.attributes?.sub_categories?.data.length === 0
                        ? `/catalog/${category.id}`
                        : ''
                    }
                  >
                    <AccordionTrigger
                      className='pl-4'
                      asChild={
                        category.attributes?.sub_categories?.data.length === 0
                          ? true
                          : false
                      }
                    >
                      <span className='font-semibold '>
                        {category.attributes?.name}
                      </span>
                    </AccordionTrigger>
                  </Link>
                  {category.attributes?.sub_categories?.data.length !== 0 && (
                    <AccordionContent>
                      <ul>
                        <Link
                          className='focus:bg-accent focus:text-primary'
                          href={`/catalog/${category.id}`}
                        >
                          <li
                            key={'Вся категория' + category.attributes?.name}
                            className='flex flex-1 items-center rounded-md text-base  py-4 pl-8 pr-4 font-medium transition-all hover:text-accent-foreground hover:bg-accent  focus:bg-accent focus:text-accent-foreground '
                          >
                            Вся категория
                          </li>
                        </Link>
                        {category.attributes?.sub_categories?.data.map(
                          (subCategory) =>
                            subCategory.attributes?.products?.data.length !==
                              0 && (
                              <Link
                                className='focus:bg-accent focus:text-primary'
                                href={`/catalog/${category.id}/${subCategory.id}`}
                                key={subCategory.attributes?.name}
                              >
                                <li
                                  key={subCategory.attributes?.name}
                                  className='flex flex-1 items-center rounded-md text-base  py-4 pl-8 pr-4 font-medium transition-all hover:text-accent-foreground hover:bg-accent  focus:bg-accent focus:text-accent-foreground'
                                >
                                  {subCategory.attributes?.name}
                                </li>
                              </Link>
                            ),
                        )}
                      </ul>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ),
          )}
        </Accordion>
      </nav>
    </aside>
  )
}

export default SideBar
