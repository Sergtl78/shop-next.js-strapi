'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function useNavigation() {
  const [url, setUrl] = useState('')
  const pathname = usePathname()
  const searchParams = useSearchParams()
  //let url = ''
  useEffect(() => {
    setUrl(`${pathname}?${searchParams}`)

    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
  return { url, searchParams, pathname }
}
