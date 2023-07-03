import createSuperbaseServerClient from 'utils/lib/supabase/server'

const handler = async (req, res) => {
  const supabaseClient = createSuperbaseServerClient(req, res)
  if (req.method === 'POST') {
    const { refreshToken } = req.body
    const {
      data: { session },
      error
    } = await supabaseClient.auth.refreshSession({
      refresh_token: refreshToken
    })
    if (error) return res.status(401).json({ error: error.message })
    return res.status(200).json(session)
  } else {
    const { data, error } = await supabaseClient.auth.getSession()
    if (error) return res.status(401).json({ error: error.message })
    return res.status(200).json(data)
  }
}

export default handler
