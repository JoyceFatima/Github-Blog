import styled from 'styled-components'

export const CardContainer = styled.div``

export const Card = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.base_post};
  min-height: 15rem;
  max-height: 15rem;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.base_border};
    transition: border 0.2s;
  }
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

export const DescriptionContainer = styled.div``

export const Description = styled.div`
  max-height: 7.5rem;
  max-width: 100%;

  overflow: hidden;
  color: ${(props) => props.theme.base_text};
`
