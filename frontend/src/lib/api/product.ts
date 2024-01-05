'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getProductsData = cache(
  async ({
    categoryId,
    sub_categoryID,
    page,
    pageSize,
    start,
    limit,
  }: {
    categoryId?: string
    sub_categoryID?: string
    page?: number
    pageSize?: number
    start?: number
    limit?: number
  }) => {
    try {
      const { products } = await gql.getProducts({
        categoryId,
        sub_categoryID,
        page,
        pageSize,
        start,
        limit,
      })
      return products
    } catch (error) {
      console.error(error)
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      )
    }
  },
)
