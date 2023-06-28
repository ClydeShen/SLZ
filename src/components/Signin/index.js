import { Button, Divider, Stack, TextField } from '@mui/material'
import React, { memo } from 'react'
import useAuth from 'hooks/useAuth'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'

const SigninForm = memo((props) => {
  const { login, loginWithGithub } = useAuth()
  const [email, setEmail] = useForm('')
  const [password, setPassword] = useForm('')
  const router = useRouter()
  const submitHandler = async (event) => {
    event.preventDefault()
    await login(email, password)
  }
  const signInWithGithub = async () => {
    const {
      query: { from }
    } = router
    await loginWithGithub(from)
  }
  return (
    <Stack component="form" spacing={3} onSubmit={submitHandler}>
      from:{router?.query?.from}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        focused
      ></TextField>
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        focused
      ></TextField>
      <Button type="submit" variant="contained">
        Signin
      </Button>
      <Divider />
      <Button variant="outlined" onClick={signInWithGithub}>
        Signin with Github
      </Button>
    </Stack>
  )
})

SigninForm.displayName = 'SigninForm'
export default SigninForm
