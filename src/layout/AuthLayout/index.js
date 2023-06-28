import React, { memo } from 'react'
import Page from 'components/Page'
import AuthNavbar from './AuthNavbar'

const AuthLayout = memo((props) => {
  const { children } = props
  return (
    <>
      <AuthNavbar />
      <Page>{children}</Page>
    </>
  )
})

AuthLayout.displayName = 'AuthLayout'
export default AuthLayout
