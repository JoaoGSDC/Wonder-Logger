import styled from 'styled-components'

export const InputLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.9rem;
  user-select: none;
  margin-bottom: 10px;
  color: ${props => props.theme.palette.text.primary};
  svg {
    margin-right: 8px;
  }
`
