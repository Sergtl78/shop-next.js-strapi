'use server'

import { gql, gqlAuth } from '@/graphql/graphQLClient'
import { cache } from 'react'
import { getProductsData } from './product'

export const getCommentsData = cache(
  async ({
    sub_categoryId,
    page,
    pageSize,
  }: {
    sub_categoryId?: string
    page?: number
    pageSize?: number
  }) => {
    try {
      const { comments } = await gql.getComments({
        sub_categoryId,
        page,
        pageSize,
      })
      return comments
    } catch (error) {
      console.error(error)
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      )
    }
  },
)

export const addComment = cache(
  async ({
    sub_categoryId,
    userId,
    content,
    rate,
  }: {
    sub_categoryId: string
    userId: string
    content: string
    rate: number
  }) => {
    try {
      const { createComment } = await gqlAuth().CreateComment({
        sub_categoryId,
        userId,
        content,
        rate,
      })
      const comments = await getCommentsData({ sub_categoryId })
      const productRateSum = comments?.data.reduce(
        (sum, comment) => sum + (comment.attributes?.rate || 0),
        0,
      )
      const rating = (
        (productRateSum || 0) / (comments?.data?.length ?? 1)
      ).toFixed(1)
      const sub_categoryProducts = await getProductsData({ sub_categoryId })

      const updateResults = Promise.all(
        sub_categoryProducts?.data.map((product) =>
          gqlAuth().updateRatingProduct({
            productId: product.id ?? '',
            rate: Number(rating),
          }),
        ) ?? [],
      )
      console.log('updateResults', updateResults)

      return createComment
    } catch (error) {
      console.error(error)
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      )
    }
  },
)
