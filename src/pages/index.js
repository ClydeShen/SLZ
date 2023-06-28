import { Container, Typography, Button } from '@mui/material'
import React, { memo } from 'react'
import useAlert from 'hooks/useAlert'
import Link from 'next/link'
import useSWR from 'swr'
import { PATH, GET } from 'utils/lib/swr'
const Home = memo((props) => {
  // const { data, error, loading } = useSWR(PATH.CORN, GET)
  return (
    <Container>
      <Typography variant="h1">Welcome!</Typography>
      <Link href={'/e5'}>E5</Link>
      <Link href={'/yard'}>Yard</Link>
      {/* {JSON.stringify(data, null, 2)} */}
    </Container>
  )
})

Home.displayName = 'Home'
export default Home
