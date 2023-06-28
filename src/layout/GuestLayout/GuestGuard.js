import { useRouter } from 'next/router'
import { memo } from 'react'

const GuestGuard = memo((props) => {
  const { children } = props
  const router = useRouter()
  if (!router.isReady) return <div>Loading....</div>
  return <>{children}</>
})

GuestGuard.displayName = 'GuestGuard'
export default GuestGuard
