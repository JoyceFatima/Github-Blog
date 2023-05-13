import styled from 'styled-components'

export const BlogContainer = styled.div``

export const ProfileCard = styled.div`
  width: 100%;
  height: 100%;

  min-height: 13.25rem;

  position: relative;
  top: -90px; /* Posicione o card 20px acima do elemento pai */

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.base_profile};
`

export const ProfileImg = styled.div`
  width: 11rem;
  margin-right: 2rem;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const Content = styled.div``

export const NameAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;

  a {
    display: flex;
    align-items: center;
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

export const FormAndCards = styled.div`
  margin-top: -90px;
`

export const SearchForm = styled.form`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem; /* espaço entre as colunas */
`

export const InfoPublis = styled.div`
  margin-bottom: 1rem;

  display: flex;
  text-align: center;
  justify-content: space-between;
`
export const Title = styled.h3`
  color: ${(props) => props.theme.base_subtitle};
`
