import debounce from 'lodash/debounce'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ignore } from 'utils/validations'

const checkValid = debounce((value, validation, setError, options) => {
  if (validation) {
    const { isValid, errorMessage } = validation(value, options)
    // console.log(value, options, isValid, errorMessage)
    isValid ? setError('') : setError(errorMessage)
  }
}, 200)

const useForm = (initValue, validation = ignore, options) => {
  const [value, changeValue] = useState(() => initValue)
  const [error, setError] = useState('')
  const hasChange = useRef(false)
  const preValueRef = useRef(initValue)
  const setValue = (newValue) => {
    hasChange.current = true
    changeValue(newValue)
  }
  useEffect(() => {
    if (hasChange.current && value !== preValueRef.current) {
      preValueRef.current = value
      checkValid(value, validation, setError, options)
    }
  }, [options, value])
  const reset = useCallback((defaultValue) => {
    const _defaultvalue = defaultValue !== undefined ? defaultValue : initValue
    changeValue(_defaultvalue)
    setError('')
    hasChange.current = false
  }, [])
  const validate = useCallback((extraOptions) => {
    const { isValid, errorMessage } = validation(value, {
      ...options,
      ...extraOptions
    })
    isValid ? setError('') : setError(errorMessage)
    return isValid
  }, [])
  return [value, setValue, error, reset, validate, hasChange.current]
}

export default useForm
