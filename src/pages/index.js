import { Container, Typography } from '@mui/material'
import React, { memo } from 'react'

const Home = memo(() => {
  return (
    <Container>
      <Typography variant='h1'>Welcome!</Typography>
    </Container>
  )
})

Home.displayName = 'Home'
export default Home
