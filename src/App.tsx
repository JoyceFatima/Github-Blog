import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

import { LayoutHome } from './layouts/Home'

import theme from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <LayoutHome />
    </ThemeProvider>
  )
}
