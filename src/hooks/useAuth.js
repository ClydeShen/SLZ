import React, { useContext, useEffect, useReducer } from 'react'

const AuthContext = React.createContext()

const initialState = {
  isAuthenticated: false,
  isInitialized: false
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated } = action.payload
    return {
      ...state,
      isAuthenticated,
      isInitialized: true
    }
  },
  LOGIN: (state) => {
    return {
      ...state,
      isAuthenticated: true
    }
  },
  LOGOUT: (state) => {
    return {
      ...state,
      isAuthenticated: false
    }
  }
}
const authReducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export const AuthProvider = (props) => {
  const { children } = props
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const verifyUser = (user, verifyType) => {
    dispatch({
      type: verifyType,
      payload: {
        isAuthenticated: !!user
      }
    })
  }

  const login = async () => {
    return verifyUser({}, 'LOGIN')
  }

  const logout = async () => {
    return verifyUser(null, 'LOGOUT')
  }

  useEffect(() => {
    const initialize = () => {
      verifyUser(null, 'INITIALIZE')
    }
    initialize()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
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
