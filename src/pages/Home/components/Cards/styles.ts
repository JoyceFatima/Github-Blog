import styled from 'styled-components'

export const CardContainer = styled.div``

export const Card = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.base_post};
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  margin-bottom: 1.5rem;

  h1 {
    font-size: 20px;
    color: ${(props) => props.theme.base_title};
  }

  span {
    white-space: nowrap;
    color: ${(props) => props.theme.base_span};
  }
`

export const DescriptionContainer = styled.div`
  min-height: 10rem;
  max-height: 10rem;
`

export const Description = styled.div`
  max-height: 9rem;
  max-width: 100%;

  overflow: hidden;
  color: ${(props) => props.theme.base_text};
`
