import { Fade } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { startTransition, useCallback, useContext } from 'react'

const AlertContext = React.createContext()

export const AlertProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()
  const push = useCallback((message, variant = 'default', persist = false) => {
    startTransition(() => {
      enqueueSnackbar(message, {
        variant,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        persist,
        preventDuplicate: true,
        TransitionComponent: Fade
      })
    })
  }, [])
  const success = useCallback(
    (message, persist) => push(message, 'success', persist),
    []
  )
  const warning = useCallback(
    (message, persist) => push(message, 'warning', persist),
    []
  )
  const info = useCallback(
    (message, persist) => push(message, 'info', persist),
    []
  )
  const error = useCallback(
    (message, persist) => push(message, 'error', persist),
    []
  )
  const message = useCallback(
    (message, persist) => push(message, 'default', persist),
    []
  )
  return (
    <AlertContext.Provider value={{ success, warning, info, error, message }}>
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => useContext(AlertContext)
export default useAlert
