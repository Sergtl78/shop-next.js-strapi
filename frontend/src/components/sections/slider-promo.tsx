'use client'
import { ComponentSectionSliderPromo } from '@/graphql/generated'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import MediaImage from '../media-image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

type Props = {
  data: ComponentSectionSliderPromo
}

const SliderPromo = ({ data }: Props) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className='w-full  container mb-4 mt-8'
    >
      <CarouselContent>
        {data.slide?.map((slide, index) => (
          <CarouselItem key={slide?.id}>
            <div className='w-full h-[30vh] md:h-[80vh] relative bg-gradient-to-tl from-primary/50 '>
              <MediaImage
                className='object-cover aspect-video'
                image={slide?.image?.data?.attributes}
              />

              <div className='absolute top-10 left-10 md:top-40 md:left-40 flex flex-col gap-2 '>
                <h2 className='italic text-5xl '>{slide?.title}</h2>
                <h4 className='text-xl'>{slide?.description}</h4>
                <Link className='text-end' href={slide?.link ?? ''}>
                  Подробнее...
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={'ghost'}
        className='border border-border -left-0'
      />
      <CarouselNext
        variant={'ghost'}
        className='border border-border -right-0'
      />
    </Carousel>
  )
}

export default SliderPromo
