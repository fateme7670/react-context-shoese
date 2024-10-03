import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme/theme'
import Master from './screens/master'
import LogincontextProvider from './context/Logincontext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <LogincontextProvider>   
           <Master />
           </LogincontextProvider>
    
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
