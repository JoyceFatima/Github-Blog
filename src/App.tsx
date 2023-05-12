import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

import theme from './styles/themes/default'
import { RoutesPage } from './routes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesPage />
    </ThemeProvider>
  )
}
