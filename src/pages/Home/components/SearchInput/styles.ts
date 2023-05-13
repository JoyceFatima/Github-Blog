import styled from 'styled-components'

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;

  padding: 1rem;

  outline: none;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.base_border};

  background-color: ${(props) => props.theme.base_input};
  color: ${(props) => props.theme.base_label};

  &&:focus {
    border: 2px solid ${(props) => props.theme.blue};
    transition: border 0.2s;
  }
`
