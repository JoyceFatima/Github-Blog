import Cover from '../../assets/images/Cover.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Cover} alt="Banner" />
    </HeaderContainer>
  )
}
