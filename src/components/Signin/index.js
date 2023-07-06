import { Button, Stack } from '@mui/material'
import useAuth from 'hooks/useAuth'
import { Field, useForm } from 'hooks/useForm'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import Schema from 'utils/validations'

const SigninForm = memo(() => {
  const { login, loginWithGithub } = useAuth()
  const { Form } = useForm({
    initValues: {
      email: '',
      password: ''
    },
    validationSchema: Schema.SignIn
  })
  const router = useRouter()
  const next = router?.query?.next || '/yard'
  const isE5 = next === '/e5'

  const onSuccess = useCallback(() => {
    router.push(next)
  }, [next])
  const submitHandler = async (signinData) => {
    await login(signinData, onSuccess)
  }
  const signInWithGithub = async () => {
    if (isE5) loginWithGithub(next)
  }
  return (
    <Form onSubmit={submitHandler}>
      <Stack spacing={3}>
        {isE5 ? (
          <Button variant="outlined" onClick={signInWithGithub}>
            Signin with Github
          </Button>
        ) : (
          <>
            <Field label="Email" type="email" name="email" focused></Field>
            <Field
              label="Password"
              type="password"
              name="password"
              focused
            ></Field>
            <Button type="submit" variant="contained">
              Signin
            </Button>
          </>
        )}
      </Stack>
    </Form>
  )
})

SigninForm.displayName = 'SigninForm'
export default SigninForm
