import React, { FC } from 'react'
import styled from 'styled-components/native'

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`

interface ButtonProps {
  onPress?: () => void
  title: string
}

const Button: FC<ButtonProps> = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
)

export default Button
