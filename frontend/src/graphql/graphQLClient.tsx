import { GraphQLClient } from 'graphql-request'
import { cookies } from 'next/headers'
import { getSdk } from './generated'

export const graphqlClient = new GraphQLClient(
  (process.env.NEXT_PUBLIC_STRAPI_GQL_URL as string) ?? '',
  {
    headers: {
      'Content-Type': 'application/json',
      //Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? '',
    },
  },
)

export const gql = getSdk(graphqlClient)

export const gqlAuth = () => {
  const jwt = cookies().get('asses-token-jwt')

  if (!jwt) throw new Error('Нет доступа')
  return getSdk(
    new GraphQLClient(
      (process.env.NEXT_PUBLIC_STRAPI_GQL_URL as string) ?? '',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt.value}`,
        },
      },
    ),
  )
}

export * from './generated'
