import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '../../presentation/constants/screenNames'
import LoginScreen from '../../presentation/screens/LoginScreen'
import RegisterScreen from '../../presentation/screens/RegisterScreen'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREEN_NAMES.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
