'use server'

import { AddressInput, gqlAuth } from '@/graphql/graphQLClient'
import { cache } from 'react'

export const getAddress = cache(async ({ id }: { id: string }) => {
  try {
    const { addresses } = await gqlAuth().getAddress({ id })

    return addresses
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})

export const createAddress = async (data: AddressInput) => {
  try {
    const { createAddress } = await gqlAuth().createAddress(data)

    return createAddress
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
}
export const updateAddress = async ({
  id,
  data,
}: {
  id: string
  data: AddressInput
}) => {
  try {
    const { updateAddress } = await gqlAuth().updateAddress({ id, ...data })

    return updateAddress
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
}
export const deleteAddress = async ({ id }: { id: string }) => {
  try {
    const { deleteAddress } = await gqlAuth().deleteAddress({ id })

    return !!deleteAddress && 'Адрес удален'
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
}
