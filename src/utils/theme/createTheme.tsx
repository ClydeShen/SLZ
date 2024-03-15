import { createTheme, responsiveFontSizes } from '@mui/material'
import themeOptions from './themeOptions'
const createFrontendTheme = () => {
  const customTheme = createTheme(themeOptions)
  return responsiveFontSizes(customTheme)
}
const theme = createFrontendTheme()
export default theme
