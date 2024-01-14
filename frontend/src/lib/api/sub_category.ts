import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getSubCategoryData = cache(async (id: string) => {
  try {
    const { subCategory } = await gql.getSubCategory({ id })
    return subCategory
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
