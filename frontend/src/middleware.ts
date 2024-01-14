import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('asses-token-jwt')

  const currentPath = request.nextUrl.pathname

  if (currentPath === '/user' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (currentPath === '/user/*' && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
