import React, { memo } from 'react'
import dynamic from 'next/dynamic'

const AuthLayout = dynamic(() => import('layout/AuthLayout'))
const Link = dynamic(() => import('next/link'))

const E5 = memo((props) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <Link href={'/yard'}>Yard</Link>
    </div>
  )
})

E5.displayName = 'E5'
E5.getLayout = (page) => <AuthLayout>{page}</AuthLayout>
export default E5
