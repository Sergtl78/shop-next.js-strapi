'use server'

import {
  ComponentElementCartItemInput,
  Enum_Order_Status,
  gqlAuth,
} from '@/graphql/graphQLClient'
import { cache } from 'react'

type CreateOrderType = {
  userId: string
  addressId: string
  deliveryId: string
  status: Enum_Order_Status
  total_price: number
  total_quantity: number
  cart: ComponentElementCartItemInput[]
}

export const createOrder = async ({
  userId,
  addressId,
  deliveryId,
  status,
  total_price,
  total_quantity,
  cart,
}: CreateOrderType) => {
  try {
    const { createOrder } = await gqlAuth().createOrder({
      userId,
      addressId,
      deliveryId,
      status,
      total_price,
      total_quantity,
      cart,
    })
    return createOrder
  } catch (error) {
    console.error(error)
    /* throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    ) */
  }
}
export const getOrderByUserId = cache(async (userId: string) => {
  try {
    const { orders } = await gqlAuth().getOrderByUserId({ userId })
    return orders
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
