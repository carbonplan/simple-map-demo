import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '@carbonplan/maps/mapbox.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
