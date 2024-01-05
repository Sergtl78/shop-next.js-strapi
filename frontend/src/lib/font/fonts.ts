import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: './Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})
