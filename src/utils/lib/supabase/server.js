import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const createSuperbaseServerClient = (req, res) => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_KEY) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_KEY')
  }
  return createPagesServerClient(
    { req, res },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
      cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
      }
    }
  )
}

export default createSuperbaseServerClient
