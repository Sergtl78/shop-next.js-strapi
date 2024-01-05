'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getPageData = cache(async ({slug}:{slug: string}) => {
  try {
    const { pages } = await gql.getPages({ slug })
    return pages
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
