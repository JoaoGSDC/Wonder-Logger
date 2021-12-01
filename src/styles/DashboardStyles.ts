import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;

  padding: 8px;
`

export const H1Success = styled.h1`
  color: #55d446;
  font-size: 2em;

  position: absolute;
  left: 0;
  right: 0;
  top: 55px;
  margin: auto;
  width: max-content;
`

export const H3Success = styled.h3`
  color: #55d446;
`
export const H3Label = styled.h3`
  color: ${props => (props.color ? props.color : '#55d446')};
`

export const H1Err = styled.h1`
  color: #e64343;
  font-size: 2em;

  position: absolute;
  left: 0;
  right: 0;
  top: 55px;
  margin: auto;
  width: max-content;
`

export const H3Err = styled.h3`
  color: #e64343;
`

export const H1Container = styled.div`
  position: relative;

  height: 150px;
  width: 150px;
`
