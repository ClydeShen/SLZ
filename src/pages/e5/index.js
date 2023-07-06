import useAuth from 'hooks/useAuth'
import AuthLayout from 'layout/AuthLayout'
import Link from 'next/link'
import { memo } from 'react'
// const AuthLayout = dynamic(() => import('layout/AuthLayout'))
// const Link = dynamic(() => import('next/link'))

// 1. callback URL
// 2. Key:{ClientId, ClientSecret, TenantId}
// 3. Period [3600 - 7200] seconds
// 4. Authorization
const E5 = memo((props) => {
  const { user } = useAuth()
  console.log('user', user)
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
