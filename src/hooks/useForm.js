import { FormHelperText, TextField } from '@mui/material'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore
} from 'react'

const FormContext = createContext()

const createForm = (initValues, validationSchema) => {
  const useFormData = () => {
    const [errors, setErrors] = useState({})
    const store = useRef(initValues)
    const subscribers = useRef(new Set())
    const get = useCallback(
      (key) => (key ? store.current[key] : store.current),
      []
    )
    const set = useCallback((key, value) => {
      store.current = {
        ...store.current,
        [key]: value
      }
      subscribers.current.forEach((callback) => callback(store.current))
    }, [])
    const subscribe = useCallback((callback) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])
    const reset = useCallback(() => {
      store.current = initValues
      setErrors({})
      subscribers.current.forEach((callback) => callback(store.current))
    }, [])
    return {
      get,
      set,
      subscribe,
      errors,
      setErrors,
      reset
    }
  }

  const FormProvider = forwardRef(({ children, onSubmit }, ref) => {
    return (
      <FormContext.Provider value={useFormData()}>
        <FormContext.Consumer>
          {(formData) => {
            const handleSubmit = (event) => {
              event.preventDefault()
              const data = formData.get()
              if (validationSchema) {
                const { success, error } = validationSchema.safeParse(data)
                if (!success) {
                  formData.setErrors(error.formErrors.fieldErrors)
                } else {
                  formData.setErrors('_errors', {})
                  onSubmit?.(data, event)
                }
              }
            }
            const handleReset = () => {
              formData.reset()
            }
            if (ref) {
              ref.current = {
                reset: handleReset
              }
            }
            return <form onSubmit={handleSubmit}>{children}</form>
          }}
        </FormContext.Consumer>
      </FormContext.Provider>
    )
  })
  FormProvider.displayName = 'FormProvider'
  return {
    FormProvider
  }
}

export const useField = (name) => {
  const store = useContext(FormContext)
  const selector = (store) => store[name]
  if (!store) throw new Error('useField must be used within a FormProvider')
  const state = useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector()
  )
  return [state, store.set, store.errors?.[name]]
}

export const Field = (props) => {
  const { name, onChange, ...restProps } = props
  const [value, setValue, error] = useField(name)
  return (
    <TextField
      id={name}
      error={!!error}
      FormHelperTextProps={{
        component: 'div',
        sx: {
          m: 0
        }
      }}
      helperText={
        <>
          {error?.map((err) => (
            <FormHelperText key={err}>{err}</FormHelperText>
          ))}
        </>
      }
      value={value}
      onChange={(e) => {
        onChange?.(e)
        setValue(name, e.target.value)
      }}
      {...restProps}
    />
  )
}

export const useForm = ({ initValues, validationSchema }) => {
  const { FormProvider: Form } = useMemo(
    () => createForm(initValues, validationSchema),
    [initValues, validationSchema]
  )
  return {
    Form
  }
}
