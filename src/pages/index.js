import { Container, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { memo } from 'react'

const Link = dynamic(() => import('next/link'))

const Home = memo(() => {
  return (
    <Container>
      <Typography variant="h1">Welcome!</Typography>
      <Link href={'/e5'}>E5</Link>
      <Link href={'/yard'}>Yard</Link>
    </Container>
  )
})

Home.displayName = 'Home'
export default Home
