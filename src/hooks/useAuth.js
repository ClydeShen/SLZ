import { useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useReducer } from 'react'
import useSWRMutation from 'swr/mutation'
import { getOrigin } from 'utils/helpers'
import { GET, PATH } from 'utils/lib/swr'
import Schema from 'utils/validations'
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

  const verifyUser = async (event, token) => {
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
  }

  const login = async (signinData, onSuccess) => {
    try {
      const { success, error: dataError } = Schema.SignIn.safeParse(signinData)
      if (!success) {
        return alert.error(dataError.message)
      }
      const { error } = await supabaseClient.auth.signInWithPassword(signinData)
      if (error?.message) {
        return alert.error(error?.message)
      }
      onSuccess()
    } catch (err) {
      console.log('error', err)
    }
  }
  const loginWithGithub = async (next = '') => {
    try {
      await supabaseClient.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${getOrigin()}${next}`
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
