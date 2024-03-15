'use client'

import theme from '@/utils/theme/createTheme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

export const ThemeProivder = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LocalizationProvider>
  )
}
