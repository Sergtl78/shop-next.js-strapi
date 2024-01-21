export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export function getAppURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhosts:3000'
  }${path}`
}

export function getStrapiMedia(url: string) {
  if (url == null) {
    return ''
  }

  if (url.startsWith('http') || url.startsWith('//')) {
    return url
  }

  return `${getStrapiURL()}${url}`
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('ru-RU', options)
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time))

export const formatStatus = (status: string): string => {
  switch (status) {
    case 'pending':
      return 'Обрабатывается'

    case 'processing':
      return 'Отправлен'

    case 'shipped':
      return 'Доставлен'

    case 'closed':
      return 'Закрыт'

    default:
      return ''
  }
}
