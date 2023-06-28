import React, { memo } from 'react'
import GuestGuard from './GuestGuard'

const GuestLayout = memo((props) => {
  const { children } = props
  return <GuestGuard>{children}</GuestGuard>
})

GuestLayout.displayName = 'GuestLayout'
export default GuestLayout
