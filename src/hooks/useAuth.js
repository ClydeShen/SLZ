import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import useSWRMutation from 'swr/mutation'
import { PATH, GET } from 'utils/lib/swr'
import { getOrigin } from 'utils/helpers'
import { useSessionContext } from '@supabase/auth-helpers-react'
import useAlert from './useAlert'

const AuthContext = React.createContext()

const initialState = {
  isAuthenticated: false,
  isInitialized: false
}

export const EVENTS = {
  INITIAL_SESSION: 'INITIAL_SESSION',
  SIGNED_IN: 'SIGNED_IN',
  SIGNED_OUT: 'SIGNED_OUT',
  TOKEN_REFRESHED: 'TOKEN_REFRESHED',
  USER_UPDATED: 'USER_UPDATED',
  PASSWORD_RECOVERY: 'PASSWORD_RECOVERY'
}

const handlers = {
  INITIAL_SESSION: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: !!user,
      isInitialized: true,
      user
    }
  },
  SIGNED_IN: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      isAuthenticated: !!user,
      user
    }
  },
  SIGNED_OUT: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    }
  }
}
const authReducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export const AuthProvider = (props) => {
  const { children } = props
  const { supabaseClient } = useSessionContext()
  const alert = useAlert()
  const [authState, dispatch] = useReducer(authReducer, initialState)
  const router = useRouter()
  const { data: user, trigger } = useSWRMutation(PATH.AUTH.USER, GET)

  const verifyUser = useCallback(async (event, token) => {
    console.log('verifyUser', { event, token })
    let user = null
    if (token) {
      const result = await trigger({ token })
      user = result?.user
    }
    dispatch({
      type: event,
      payload: {
        user
      }
    })
    if (event === EVENTS.SIGNED_OUT) {
      setTimeout(() => {
        router.reload()
      }, 10)
    }
  }, [])

  const login = async (email, password) => {
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      })
      error?.message && alert.error(error?.message)
    } catch (err) {
      console.log('error', err)
    }
  }
  const loginWithGithub = async (from = '') => {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${getOrigin()}api/auth/verify?from=${from}`
        }
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  const logout = async () => {
    await supabaseClient.auth.signOut()
  }

  useEffect(() => {
    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange((event, currentSession) => {
      console.log('Auth Subscription: ', { event, user, currentSession })
      verifyUser(event, currentSession?.access_token)
    })
    return () => {
      subscription?.unsubscribe()
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        loginWithGithub,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
const useAuth = () => useContext(AuthContext)
export default useAuth
