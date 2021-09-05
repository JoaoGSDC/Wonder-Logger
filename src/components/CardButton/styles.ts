import styled from 'styled-components'

export const Container = styled.div`
  width: 120px;
  min-width: 120px;
  height: 120px;
  min-height: 120px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.05),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  transition: background 300ms linear, transform 400ms linear;
  cursor: pointer;

  svg {
    pointer-events: none;
  }

  &:not(:first-child) {
    margin-left: 20px;

    @media (max-width: 576px) {
      margin-left: 16px;
    }
  }

  &:nth-child(odd) {
    svg {
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      background: ${props => props.theme.colors.primary};
    }
  }

  &:nth-child(even) {
    svg {
      color: #f45302;
    }

    &:hover {
      background: #f45302;
    }
  }

  &:hover {
    transform: scale(1.05);
    color: white;

    svg {
      color: white;
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`

export const ButtonTitle = styled.span`
  margin-top: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  pointer-events: none;
  user-select: none;
`
