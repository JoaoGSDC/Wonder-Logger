import styled from 'styled-components'

import loginBackground from '@assets/login-background.jpg'

export const Container = styled.main`
  background: url(${loginBackground}) no-repeat center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  padding: 5%;
  position: relative;
`

export const BackgroundOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* backdrop-filter: blur(4px); */
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: #fff;
  max-height: 540px;
  margin-right: 64px;
  border-radius: 32px;
  padding: 42px 36px;
`

export const LoginContainerHeader = styled.div`
  user-select: none;
  margin-bottom: 36px;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    font-size: 15px;
    font-weight: 500;
  }
`

export const DialogContainer = styled.div`
  flex: 1;
  height: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px;

  h1 {
    font-size: 64px;
    line-height: 68px;
    color: rgba(255, 255, 255, 0.9);
    display: inline-block;
    max-width: 600px;
    font-weight: 400;
    user-select: none;

    @media (max-width: 993px) {
      display: none;
    }
  }
`
