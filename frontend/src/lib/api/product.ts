'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getALLProductsData = cache(
  async ({
    categoryId,
    sub_categoryId,
    page,
    pageSize,
    start,
    limit = 1000,
    query,
    sort,
  }: {
    categoryId?: string
    sub_categoryId?: string
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
        sub_categoryId,
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
    productId,
    categoryId,
    sub_categoryId,
    colorId,
    memoryId,
    page,
    pageSize,
    start,
    limit,
    query,
    sort,
  }: {
    productId?: string
    categoryId?: string
    sub_categoryId?: string
    colorId?: string
    memoryId?: string
    page?: number
    pageSize?: number
    start?: number
    limit?: number
    query?: string
    sort?: string
  }) => {
    try {
      const { products } = await gql.getProducts({
        productId,
        categoryId,
        sub_categoryId,
        colorId,
        memoryId,
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
