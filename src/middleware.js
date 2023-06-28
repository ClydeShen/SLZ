import createSupabaseMiddlewareClient from 'utils/lib/supabase/middleware'
import { NextResponse } from 'next/server'

export const middleware = async (req) => {
  const res = NextResponse.next()
  const supabaseClient = createSupabaseMiddlewareClient(req, res)
  const {
    data: { session }
  } = await supabaseClient.auth.getSession()
  console.log('middleware.js')
  if (!session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth/signin'
    return NextResponse.redirect(redirectUrl)
  }
  return res
}

export const config = {
  matcher: ['/e5/:path*', '/yard/:path*']
}
