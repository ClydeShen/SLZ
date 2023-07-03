import createSupabaseMiddlewareClient from 'utils/lib/supabase/middleware'
import { NextResponse } from 'next/server'

export const middleware = async (req) => {
  const { searchParams } = req.nextUrl
  const res = NextResponse.next()
  const supabaseClient = createSupabaseMiddlewareClient(req, res)
  const redirectUrl = req.nextUrl.clone()
  let session = (await supabaseClient.auth.getSession()).data.session
  if (searchParams.get('code')) {
    session = (
      await supabaseClient.auth.exchangeCodeForSession(searchParams.get('code'))
    ).data.session
  }
  if (!session) {
    redirectUrl.pathname = '/auth/signin'
    redirectUrl.searchParams.set('next', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  console.log('middleware.js to: ', res)
  return res
}

export const config = {
  matcher: ['/e5/:path*', '/yard/:path*']
}
