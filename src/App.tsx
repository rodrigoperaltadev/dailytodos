import React from 'react'
import AppNavigator from './app/navigation/AppNavigator'
import { ThemeProvider } from 'styled-components/native'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './infrastructure/firebase/config'
import { theme } from './presentation/utils/theme/theme'

// Inicialización de la aplicación de Firebase
initializeApp(firebaseConfig)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  )
}

export default App
