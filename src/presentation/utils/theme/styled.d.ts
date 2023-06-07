import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      white: string
    }
    typography: {
      fontFamily: string
      fontSize: number
    }
  }
}
