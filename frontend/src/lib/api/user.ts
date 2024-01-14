'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getUserByEmail = cache(async (email: string) => {
  try {
    const { usersPermissionsUsers } = await gql.getUserByEmail({ email })
    return usersPermissionsUsers
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
