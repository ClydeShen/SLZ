import React, { memo } from 'react'
import Head from 'next/head'
import { Stack } from '@mui/material'

const Page = memo((props) => {
  const { children, title } = props
  return (
    <Stack
      id="appPage"
      sx={{
        backgroundColor: 'background.default',
        flexGrow: 1
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Stack>
  )
})

Page.displayName = 'Page'
export default Page
