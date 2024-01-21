'use server'

import { gql, gqlAuth } from '@/graphql/graphQLClient'
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
export const getUserById = cache(async ({ id }: { id: string }) => {
  try {
    const { usersPermissionsUser } = await gqlAuth().getUserById({ id })
    
    return usersPermissionsUser
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
export const updateUser = cache(async ({ id,username,email }: { id: string,username?:string,email?:string }) => {
  try {
    const { updateUsersPermissionsUser } = await gqlAuth().updateUser({ id,email, username})
    
    return updateUsersPermissionsUser
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
