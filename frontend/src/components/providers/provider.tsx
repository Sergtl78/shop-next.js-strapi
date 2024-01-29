'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'

import StoreProvider from './StoreProvider'

type Props = {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <StoreProvider> {children}</StoreProvider>
    </ThemeProvider>
  )
}

export default Provider
