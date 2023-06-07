import * as React from 'react'
import Button from '../../app/components/button/Button'
import { styled } from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const LoginScreen = () => {
  return (
    <Container>
      <Button title="Login Screen" />
    </Container>
  )
}

export default LoginScreen
