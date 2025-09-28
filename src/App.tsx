import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import MainLayout from './components/MainLayout'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout />
    </ThemeProvider>
  )
}
