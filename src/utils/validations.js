const ignore = () => {
  return { isValid: true, errorMessage: '' }
}

const required = (value) => {
  if (typeof value === 'undefined' || value === '') {
    return { isValid: false, errorMessage: 'Please fill out this field' }
  }
  if (value.trim?.() === '') {
    return { isValid: false, errorMessage: 'Please fill out this field' }
  }
  return { isValid: true, errorMessage: '' }
}

const validations = {
  ignore,
  required
}

export default validations
