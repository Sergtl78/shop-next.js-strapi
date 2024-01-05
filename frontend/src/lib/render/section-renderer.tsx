import Header from '@/components/sections/header'
import RichText from '@/components/sections/rich-text'
import { SliderCollection } from '@/components/sections/slider-collection'
import SliderPromo from '@/components/sections/slider-promo'
import { PageSectionsDynamicZone } from '@/graphql/generated'
import CategoriesBlock from '../../components/sections/categories-block'

export function sectionRenderer(
  section: PageSectionsDynamicZone,
  index: number,
) {
  switch (section.__typename) {
    case 'ComponentSectionHeader':
      return <Header key={index} data={section} />
    case 'ComponentSectionSliderPromo':
      return <SliderPromo key={index} data={section} />
    case 'ComponentSectionRichText':
      return <RichText key={index} data={section} />
    case 'ComponentSectionSliderCollection':
      return <SliderCollection key={index} data={section} />
    case 'ComponentSectionCategories':
      return <CategoriesBlock key={index} data={section} />
    default:
      return null
  }
}
