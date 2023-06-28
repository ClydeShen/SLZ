import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

const createSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_KEY) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_KEY')
  }
  return createPagesBrowserClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY
  })
}
export default createSupabaseClient
