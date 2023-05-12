import styled from 'styled-components'

export const Container = styled.div``

export const CardContainer = styled.div`
  width: 100%;

  position: relative;
  top: -90px; /* Posicione o card 20px acima do elemento pai */

  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.base_profile};
`

export const Nagivation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  a {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
  }
`

export const Links = styled.ul`
  margin-top: 1rem;

  display: flex;
  gap: 2rem;

  a {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const Description = styled.div`
  margin: 0 3rem;
  padding: 3rem 0;

  margin-top: -90px; /* igual à altura do card */

  p {
    padding-bottom: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }
`
