import { TextField } from '@mui/material'
import { useStore } from 'hooks/useStore'

const TextInput = (props) => {
  const { name } = props
  const [value, setValue] = useStore((store) => store[name])
  return (
    <TextField
      value={value}
      label={name}
      onChange={(e) => {
        setValue({ [name]: e.target.value })
      }}
    />
  )
}

TextInput.displayName = 'TextInput'
export default TextInput
