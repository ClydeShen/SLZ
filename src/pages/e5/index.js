import React, { memo } from 'react'
import AuthLayout from 'layout/AuthLayout'
import Link from 'next/link'

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
