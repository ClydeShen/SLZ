import { Button, Divider, Stack, TextField } from '@mui/material'
import React, { memo, useCallback } from 'react'
import useAuth from 'hooks/useAuth'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'

const SigninForm = memo(() => {
  const { login, loginWithGithub } = useAuth()
  const [email, setEmail] = useForm('')
  const [password, setPassword] = useForm('')
  const router = useRouter()
  console.log('router', router)
  const next = router?.query?.next || '/yard'
  const isE5 = next === '/e5'

  const onSuccess = useCallback(() => {
    router.push(next)
  }, [next])
  const submitHandler = async (event) => {
    event.preventDefault()
    await login(email, password, onSuccess)
  }
  const signInWithGithub = async () => {
    if (isE5) loginWithGithub(next)
  }
  return (
    <Stack component="form" spacing={3} onSubmit={submitHandler}>
      from:{next}
      {isE5 ? (
        <Button variant="outlined" onClick={signInWithGithub}>
          Signin with Github
        </Button>
      ) : (
        <>
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
        </>
      )}
    </Stack>
  )
})

SigninForm.displayName = 'SigninForm'
export default SigninForm
