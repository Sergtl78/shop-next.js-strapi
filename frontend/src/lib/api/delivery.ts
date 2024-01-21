'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getDeliveries = cache(async () => {
  try {
    const { deliveries } = await gql.getDeliveries()
    return deliveries
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
