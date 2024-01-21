'use server'

import { gql } from '@/graphql/graphQLClient'
import { useAuthState } from '@/store/authState'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserByEmail, getUserById } from './user'

export const login = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const { login } = await gql.login({
      email,
      password,
    })

    if (login.jwt) {
      cookies().set('asses-token-jwt', login.jwt)
    }
    const user = await getUserById({ id: login.user.id })
    return { jwt: login.jwt, user }
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

      if (register.jwt) {
        cookies().set('asses-token', register.jwt)

        const user = await getUserById({ id: register.user.id })

        useAuthState.setState({
          isAuth: true,
          jwt: register.jwt,
          user: user,
        })
      }
      return register
    } catch (error) {
      console.error(error)
      throw new Error('Server error please try again later.')
    }
  } else {
    throw new Error('Такой email уже зарегистрирован.')
  }
}
