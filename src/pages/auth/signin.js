import Container from '@mui/material/Container'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const SigninForm = dynamic(() => import('components/Signin'))
const GuestLayout = dynamic(() => import('layout/GuestLayout'))
const Page = dynamic(() => import('components/Page'))

const Signin = memo(() => {
  return (
    <Page title="Signin">
      <Container
        maxWidth="xs"
        sx={{
          py: 8
        }}
      >
        <SigninForm />
      </Container>
    </Page>
  )
})

Signin.displayName = 'Signin'
Signin.getLayout = (page) => <GuestLayout>{page}</GuestLayout>
export default Signin
