import { ImageFragment } from '@/graphql/generated'
import { getStrapiMedia } from '@/lib/api/api-helpers'
import Image from 'next/image'

type Props = {
  image: ImageFragment | null | undefined
  className?: string
}

const MediaImage = ({ image, className }: Props) => {
  image
  if (!image) return null
  const { width, height, url, alternativeText } = image

  return (
    <Image
      className={className}
      src={getStrapiMedia(url) || ''}
      width={width || 400}
      height={height || 400}
      alt={alternativeText || 'image'}
    />
  )
}

export default MediaImage
