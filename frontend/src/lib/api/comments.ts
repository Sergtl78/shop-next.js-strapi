'use server'

import { gql, gqlAuth } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getCommentsData = cache(async (productId?: string) => {
  try {
    const { comments } = await gql.getComments({ productId })
    return comments
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})

export const addComment = cache(
  async ({
    jwt,
    productId,
    userId,
    content,
    rate,
  }: {
    jwt: string
    productId: string
    userId: string
    content: string
    rate: number
  }) => {
    try {
      const { createComment } = await gqlAuth(jwt).CreateComment({
        productId,
        userId,
        content,
        rate,
      })
      const comments = await getCommentsData(productId)
      const productRateSum = comments?.data.reduce(
        (sum, comment) => sum + (comment.attributes?.rate || 0),
        0,
      )
      const rating = (
        (productRateSum || 0) / (comments?.data?.length ?? 1)
      ).toFixed(1)
      await gqlAuth(jwt).updateRatingProduct({
        productId,
        rate: Number(rating),
      })

      return createComment
    } catch (error) {
      console.error(error)
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      )
    }
  },
)
