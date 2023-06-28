import createSuperbaseServerClient from 'utils/lib/supabase/server'

const handler = async (req, res) => {
  const { code, from = '/yard' } = req.query
  console.log('api/auth/verify.js: from', from)
  if (code) {
    const supabaseClient = createSuperbaseServerClient(req, res)
    await supabaseClient.auth.exchangeCodeForSession(String(code))
    return res.redirect(from || '/yard')
  }
  return res.redirect('/')
}
export default handler
