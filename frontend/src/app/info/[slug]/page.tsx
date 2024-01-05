import { Metadata } from 'next'
import { FALLBACK_SEO } from '@/lib/utils/constants'
import { sectionRenderer } from '@/lib/utils/render/section-renderer'
import { gql } from '@/lib/providers/getQueryClient'
type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pages } = await gql.getPages({ slug: params.slug })
  if (!pages) return FALLBACK_SEO
  const metadata = pages?.data[0].attributes?.seo

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    keywords: metadata?.keywords,
  }
}

export default async function PageRoute({ params }: Props) {
  console.log(params)
  const { pages } = await gql.getPages({ slug: params.slug })
  console.log(pages)

  if (!pages) throw new Error('Что-то пошло не так')

  const contentSections = pages.data[0].attributes?.sections

  if (!contentSections) return null

  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  )
}
