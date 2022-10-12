/* eslint-disable react-hooks/exhaustive-deps */
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import createCustomTheme, { THEMES } from '../theme'
import { languageOptions } from '../utils/i18n'

const PreferencesContext = React.createContext()
const Default_Language = 'enNZ'

export const PreferencesProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(() =>
    prefersDarkMode ? THEMES.DARK : THEMES.LIGHT
  )
  const [language, setLanguage] = useState(Default_Language)
  const [locale, setLocale] = useState(languageOptions[Default_Language])
  const { i18n } = useTranslation()
  useEffect(() => {
    setTheme(prefersDarkMode ? THEMES.DARK : THEMES.LIGHT)
  }, [prefersDarkMode])
  useEffect(() => {
    const defaultLanguage = localStorage.getItem('lang') || Default_Language
    updateLanguage(defaultLanguage)
  }, [])

  const updateLanguage = (l) => {
    if (!l) return
    const i18nLang = `${l.substring(0, 2)}-${l.substring(2, 4)}`
    setLanguage(l)
    setLocale(languageOptions[l])
    i18n.changeLanguage(i18nLang)
    window.__localeId__ = l
    localStorage.setItem('lang', l)
  }
  const updateTheme = (t) => {
    if (!t) return
    setTheme(t)
  }
  const customTheme = useMemo(
    () => createCustomTheme({ language, theme }),
    [language, theme]
  )
  return (
    <PreferencesContext.Provider
      value={{
        language,
        updateLanguage,
        theme,
        updateTheme,
        isDark: theme === 'DARK'
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={locale.local}
      >
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </PreferencesContext.Provider>
  )
}

const usePreferences = () => useContext(PreferencesContext)
export default usePreferences
