import Footer from '@/components/footer'
import MobileNav from '@/components/navigation/mobile-nav'
import Navbar from '@/components/navigation/navbar'
import Provider from '@/components/providers/provider'
import { Toaster } from '@/components/ui/toaster'
import { getGlobalMetaData } from '@/lib/api/globalData'
import { FALLBACK_SEO } from '@/lib/constants/seo'
import { inter } from '@/lib/font/fonts'
import { cn } from '@/lib/utils'
import '@/style/global.css'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { seo, favicon } = await getGlobalMetaData()
  if (!seo || !favicon) return FALLBACK_SEO

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,

    //добавить og meta
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Provider>
          <Navbar />
          <main className='relative flex min-h-screen flex-1 flex-col'>
            {children}
          </main>
          <MobileNav />
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
