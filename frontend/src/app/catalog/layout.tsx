import SideBar from '@/components/navigation/side-bar'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function CatalogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='relative flex min-h-screen flex-col font-sans'>
      <div className='container grid md:grid-cols-5'>
        <div className='hidden md:flex '>
          <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 w-full'>
            <SideBar />
          </ScrollArea>
        </div>
        <div className='md:col-span-4'>{children} </div>
      </div>
    </section>
  )
}
