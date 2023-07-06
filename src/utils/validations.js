import { z } from 'zod'

const SignIn = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

const Schema = {
  SignIn
}

export default Schema
