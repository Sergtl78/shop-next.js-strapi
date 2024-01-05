'use server'

import { gql } from '@/graphql/graphQLClient'
import { cache } from 'react'

const getGlobalData = cache(async () => {
  try {
    const { global } = await gql.getGlobal()
    return global
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    )
  }
})
export const getGlobalMetaData = async () => {
  const global = await getGlobalData()
  const seo = global?.data?.attributes?.seo
  const favicon = global?.data?.attributes?.seo?.metaImage
  return { seo, favicon }
}

export const getNavbar = async () => {
  const global = await getGlobalData()
  const socialLink = global?.data?.attributes?.social
  const menuLink = global?.data?.attributes?.menu
  return { socialLink, menuLink }
}
export const getFooter = async () => {
  const global = await getGlobalData()
  const socialLink = global?.data?.attributes?.social
  const menuLink = global?.data?.attributes?.menu
  const serviceLink = global?.data?.attributes?.service
  return { socialLink, serviceLink, menuLink }
}
