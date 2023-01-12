import { useStore } from 'hooks/useStore'

const DisplayValue = (props) => {
  const { name } = props
  const [value] = useStore((store) => store[name])
  return <div>display:{value}</div>
}

DisplayValue.displayName = 'DisplayValue'
export default DisplayValue
