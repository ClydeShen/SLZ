import createSuperbaseServerClient from 'utils/lib/supabase/server'

const handler = async (req, res) => {
  const supabaseClient = createSuperbaseServerClient(req, res)
  const token = req.headers.token
  const { data, error } = await supabaseClient.auth.getUser(token)
  console.log('api/auth/user.js')
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json(data)
}
export default handler
