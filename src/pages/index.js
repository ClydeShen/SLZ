import { Container, Typography, Button } from '@mui/material'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'

const Link = dynamic(() => import('next/link'))

const Home = memo((props) => {
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
