import styled, { css } from 'styled-components'

type FieldContainerContainerProps = {
  type?: string
}

export const Container = styled.div<FieldContainerContainerProps>`
  margin-bottom: 28px;
  width: 100%;
  .MuiGrid-grid-xs-12.MuiGrid-grid-sm-6 > & {
    margin-bottom: 0;
  }
  ${props =>
    props.type === 'hidden' &&
    css`
      display: none;
    `}
`
