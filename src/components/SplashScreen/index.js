import { Box, Container, LinearProgress } from '@mui/material'
import React from 'react'

const SlashScreen = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2000
    }}
  >
    <Container maxWidth='xs'>
      <LinearProgress />
    </Container>
  </Box>
)
SlashScreen.displayName = 'SlashScreen'
export default SlashScreen
