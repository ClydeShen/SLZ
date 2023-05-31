import { CacheProvider } from '@emotion/react'
import { AuthConsumer, AuthProvider } from 'hooks/useAuth'
import { PreferencesProvider } from 'hooks/usePreferences'
import Router from 'next/router'
import nProgress from 'nprogress'
import React from 'react'
import { createEmotionCache } from 'utils/create-emotion-cache'
import SlashScreen from '../components/SplashScreen'
import { Analytics } from '@vercel/analytics/react'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <CacheProvider value={emotionCache}>
        <AuthProvider>
          <PreferencesProvider>
            <AuthConsumer>
              {(auth) =>
                !auth.isInitialized ? (
                  <SlashScreen />
                ) : (
                  getLayout(<Component {...pageProps} />)
                )
              }
            </AuthConsumer>
          </PreferencesProvider>
        </AuthProvider>
      </CacheProvider>
      <Analytics />
    </>
  )
}

App.displayName = 'App'
export default App
