'use server'

import { gql } from '@/graphql/graphQLClient'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserByEmail } from './user'

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const { login: data } = await gql.login({
      email,
      password,
    })

    if (data.jwt) {
      cookies().set('asses-token-jwt', data.jwt)
      console.log('login', data)
    }
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Server error please try again later.')
  }
}

export async function logout() {
  cookies().delete('jwt')

  redirect('/')
}

export const register = async ({
  username,
  email,
  password,
}: {
  username: string
  email: string
  password: string
}) => {
  const user = await getUserByEmail(email)
  if (!user) {
    try {
      const { register } = await gql.register({
        username,
        email,
        password,
      })

      if (register.jwt) cookies().set('asses-token', register.jwt)
      return register
    } catch (error) {
      console.error(error)
      throw new Error('Server error please try again later.')
    }
  } else {
    throw new Error('Такой email уже зарегистрирован.')
  }
}
