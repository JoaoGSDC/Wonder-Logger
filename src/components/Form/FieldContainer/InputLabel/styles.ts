import styled from 'styled-components'

type labelProps = {
  color?: string
}

export const InputLabel = styled.div<labelProps>`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.9rem;
  user-select: none;
  margin-bottom: 10px;
  color: ${props => props.color || props.theme.palette.text.primary};
  svg {
    margin-right: 8px;
  }
`
