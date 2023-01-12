import { Container, Stack, Typography } from '@mui/material'
import DisplayValue from 'components/Display/DisplayValue'
import TextInput from 'components/Input/TextInput'
import { createStore } from 'hooks/useStore'

const Provider = createStore({
  firstName: '',
  lastName: ''
})

const Home = (props) => {
  console.log(props)
  return (
    <Provider>
      <Container>
        <Typography variant='h1'>Welcome!!!</Typography>
        <Stack>
          <TextInput name='firstName' />
          <TextInput name='lastName' />
          <hr />
          <DisplayValue name='firstName' />
          <DisplayValue name='lastName' />
        </Stack>
      </Container>
    </Provider>
  )
}

Home.displayName = 'Home'
Home.getInitialProps = async (context) => {
  return {}
}
export default Home
