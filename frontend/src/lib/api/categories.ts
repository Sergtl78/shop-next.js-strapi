'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getCategoriesData = cache(async () => {
  try {
    const { categories } = await gql.getCategories()
    return categories
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
// TODO:нужна ли category
export const getCategoryData = cache(async (id: string) => {
  try {
    const { category } = await gql.getCategory({ id })
    return category
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
