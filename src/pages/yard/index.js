import React, { memo } from 'react'
import AuthLayout from 'layout/AuthLayout'
import Link from 'next/link'

const YardPage = memo((props) => {
  return (
    <div>
      private page
      <Link href={'/'}>Home</Link>
      <Link href={'/e5'}>E5</Link>
    </div>
  )
})

YardPage.displayName = 'YardPage'
YardPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>
export default YardPage
