'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ComponentSectionSliderCollection } from '@/graphql/generated'
import Autoplay from 'embla-carousel-autoplay'
import CardProduct from '../product/card-product'

type Props = {
  data: ComponentSectionSliderCollection
}

export function SliderCollection({ data }: Props) {
  return (
    <section className='w-full container mb-4 mt-8'>
      <h2>{data.title}</h2>
      <p className='mb-4'>{data.description}</p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent>
          {data.collection?.data?.attributes?.products?.data.map(
            (product, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/6'>
                {product.attributes && (
                  <CardProduct data={product.attributes} />
                )}
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className='md:-left-12 -left-4 ' />
        <CarouselNext className='md:-right-12 -right-4' />
      </Carousel>
    </section>
  )
}
