import { CacheProvider } from '@emotion/react'
import React from 'react'
import { createEmotionCache } from 'utils/create-emotion-cache'

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <CacheProvider value={emotionCache}>
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  )
}

App.displayName = 'App'
export default App
