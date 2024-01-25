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
      placeholder='blur'
      blurDataURL='data:image/png;base64.iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AP/UudzEubG5xrrE0MvM08zQ2dTX3fbe0v/ew//TtADSvri7u8S+ytjP1t3f2Njc4+vn6e3s29LZwLPJp5QAtLC2xs3WucDHvsbQ1t3k4OnuvcXLrq+x39rYwMDEALu5vFBcZ1JeaKu2vpWep7e/xkdcaWV8iW59h1BqewDY1dRrcHd6iJUdN0YABRpfc4InO0hcanSLpLQ/VmMA//bs//Tr4tzapKSkqaemvbu32tTO49vS7uTc+O7mAPLp4O7i2vPn3f/16//37P/37P/06Prv5PXr4PXr4v+emSlpdq6JAAAAAElFTkSuQmCC'
    />
  )
}

export default MediaImage
