'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getALLProductsData = cache(
  async ({
    categoryId,
    sub_categoryID,
    page,
    pageSize,
    start,
    limit = 1000,
    query,
    sort,
  }: {
    categoryId?: string
    sub_categoryID?: string
    page?: number
    pageSize?: number
    start?: number
    limit?: number
    query?: string
    sort?: string
  }) => {
    try {
      const { products } = await gql.getProducts({
        categoryId,
        sub_categoryID,
        page,
        pageSize,
        start,
        limit,
        query,
        sort,
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
export const getProductsData = cache(
  async ({
    categoryId,
    sub_categoryID,
    page,
    pageSize,
    start,
    limit,
    query,
    sort,
  }: {
    categoryId?: string
    sub_categoryID?: string
    page?: number
    pageSize?: number
    start?: number
    limit?: number
    query?: string
    sort?: string
  }) => {
    try {
      const { products } = await gql.getProducts({
        categoryId,
        sub_categoryID,
        page,
        pageSize,
        start,
        limit,
        query,
        sort,
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

export const getProductByIdData = cache(async ({ id }: { id: string }) => {
  try {
    const { product } = await gql.getProduct({
      id,
    })
    return product
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
