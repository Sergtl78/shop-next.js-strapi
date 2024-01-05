import { ComponentSectionRichText } from '@/graphql/generated'

import { cn } from '@/lib/utils'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'
type Props = {
  data: ComponentSectionRichText
  className?: string
}

const RichText = ({ data, className }: Props) => {
  return (
    <section className={cn('container', className)}>
      <Markdown
        children={data.content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        urlTransform={(url) =>
          url.startsWith('http://') || url.startsWith('https://')
            ? url
            : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
        }
      />
    </section>
  )
}

export default RichText
