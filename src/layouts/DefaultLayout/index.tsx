import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { Footer, LayoutContainer } from './styles'
import { GitHubProvider } from '../../context/GitHubContext'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <GitHubProvider>
          <Outlet />
        </GitHubProvider>
      </LayoutContainer>
      <Footer />
    </>
  )
}
