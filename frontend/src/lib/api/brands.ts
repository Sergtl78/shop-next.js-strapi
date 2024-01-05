'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getBrandsData = cache(async (id?: string) => {
  try {
    const { brands } = await gql.getBrands({ id })
    return brands
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
