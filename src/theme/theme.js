import { createTheme } from '@mui/material/styles'
import palette from './palette'
import { responsiveFontSizes } from '@mui/material'
const theme = createTheme({
  palette:palette,
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'Quicksand'
    },
    h1: {
      fontWeight: 700,
      fontSize: 45,
    },
    h2: {
      fontWeight: 700,
      fontSize: 42,
    },
    h3: {
      fontWeight: 600,
      fontSize: 32,
 
    },
    h4: {
      fontWeight: 600,
      fontSize: 28,
    },
    h5: {
      fontWeight: 600,
      fontSize: 22,

    },
    h6: {
      fontWeight: 600,
      fontSize: 18,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 20,
  

      marginTop: 15
    },
    body1: {
      fontWeight: 400,
      fontSize: 18,
  
    },
    body2: {
      fontWeight: 600,
      fontSize: 14,
    
      textAlign: 'center',
      letterSpacing: 1
    },
    button: {
      fontWeight: 900,
      fontSize: 14,
      letterSpacing: 2
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: 2
    },
    overline: {
      fontWeight: 400,
      fontSize: 15,
      letterSpacing: 2,
      textDecoration: 'line-through'
    }
  }
})
export default responsiveFontSizes(theme)
