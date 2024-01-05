import { getPageData } from '@/lib/api/pageData'
import { FALLBACK_SEO } from '@/lib/constants/seo'
import { sectionRenderer } from '@/lib/render/section-renderer'

import { Metadata } from 'next'

async function generateMetadata(): Promise<Metadata> {
  const pages = await getPageData({ slug: 'home' })
  if (!pages) return FALLBACK_SEO
  const metadata = pages?.data[0].attributes?.seo

  return {
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    keywords: metadata?.keywords,
  }
}
export default async function RootRoute() {
  const pages = await getPageData({ slug: 'home' })

  if (!pages) return null

  const contentSections = pages.data[0].attributes?.sections

  if (!contentSections) return null

  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index),
  )
}
