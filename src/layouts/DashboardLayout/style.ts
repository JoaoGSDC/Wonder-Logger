import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  background: #eaeaea;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
  overflow-y: scroll;
`
