import { getSubCategoryData } from '@/lib/api/sub_category'
import { SliderCollection } from './sections/slider-collection'

type Props = {
  sub_categoryId: string
}

const RecommendSlider = async ({ sub_categoryId }: Props) => {
  const sub_category = await getSubCategoryData(sub_categoryId)
  const collection = sub_category?.data?.attributes?.slider
  return <div>{collection && <SliderCollection data={collection} />}</div>
}

export default RecommendSlider
