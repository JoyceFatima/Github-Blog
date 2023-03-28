import styled from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1120px;

  margin: 0 auto;
  background-color: ${(props) => props.theme.base_profile};
  border-radius: 10px;
`

export const ProfileCard = styled.div`
  padding: 2rem;
`

export const ProfileImg = styled.div`x`

export const NameAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`

export const Links = styled.ul`
  margin-top: 1rem;

  display: flex;
  gap: 2rem;
`
