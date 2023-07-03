import { CacheProvider } from '@emotion/react'
import { AuthConsumer, AuthProvider } from 'hooks/useAuth'
import { PreferencesProvider } from 'hooks/usePreferences'
import Router from 'next/router'
import nProgress from 'nprogress'
import React, { useState } from 'react'
import { createEmotionCache } from 'utils/create-emotion-cache'
// import SlashScreen from '../components/SplashScreen'
// import { Analytics } from '@vercel/analytics/react'
import { SnackbarProvider } from 'notistack'
import { AlertProvider } from 'hooks/useAlert'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import createSupabaseClient from 'utils/lib/supabase/client'
import dynamic from 'next/dynamic'

// const CacheProvider = dynamic(() =>
//   import('@emotion/react').then((mod) => mod.CacheProvider)
// )
// const SnackbarProvider = dynamic(() =>
//   import('notistack').then((mod) => mod.SnackbarProvider)
// )
// const AlertProvider = dynamic(() =>
//   import('hooks/useAlert').then((mod) => mod.AlertProvider)
// )
// const AuthProvider = dynamic(() =>
//   import('hooks/useAuth').then((mod) => mod.AuthProvider)
// )
// const PreferencesProvider = dynamic(() => import('hooks/usePreferences'), {
//   ssr: false
// })
const SlashScreen = dynamic(() => import('../components/SplashScreen'))
const Analytics = dynamic(() =>
  import('@vercel/analytics/react').then((mod) => mod.Analytics)
)

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)
  const [supabaseClient] = useState(() => createSupabaseClient())
  return (
    <>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider dense={true}>
          <AlertProvider>
            <SessionContextProvider
              supabaseClient={supabaseClient}
              initialSession={null}
            >
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
            </SessionContextProvider>
          </AlertProvider>
        </SnackbarProvider>
      </CacheProvider>
      <Analytics />
    </>
  )
}

App.displayName = 'App'
export default App
