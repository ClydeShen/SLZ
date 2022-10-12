import * as locales from '@mui/material/locale'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { baseThemeOptions } from './base-theme-options'
import { darkThemeOptions } from './dark-theme-options'
import { lightThemeOptions } from './light-theme-options'

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}
export const ToggleTheme = {
  LIGHT: 'DARK',
  DARK: 'LIGHT'
}

const themesOptions = {
  [THEMES.LIGHT]: lightThemeOptions,
  [THEMES.DARK]: darkThemeOptions
}

const createCustomTheme = (config = {}) => {
  const { language, ...settings } = config
  const options = themesOptions[settings?.theme] ?? themesOptions[THEMES.LIGHT]
  let theme = createTheme(
    deepmerge(baseThemeOptions, options),
    locales[language]
  )
  theme = responsiveFontSizes(theme)
  // console.log(theme)
  return theme
}

export default createCustomTheme
