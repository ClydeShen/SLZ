import { Container } from '@mui/material'
import Page from 'components/Page'
import React, { memo } from 'react'
import GuestLayout from 'layout/GuestLayout'
import SigninForm from 'components/Signin'

const Signin = memo((props) => {
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
