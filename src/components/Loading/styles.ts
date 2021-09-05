import styled, { keyframes } from 'styled-components'

const ChaseAnimation = keyframes`
  100% { transform: rotate(360deg); }
`

const ChaseDotAnimation = keyframes`
  80%, 100% { transform: rotate(360deg); }
}
`

const ChaseDotBeforeAnimation = keyframes`
50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
}
}
`

type ChaseProps = {
  size: string
}

export const Chase = styled.div<ChaseProps>`
  width: ${props => props.size || '36px'};
  height: ${props => props.size || '36px'};
  position: relative;
  animation: ${ChaseAnimation} 2.5s infinite linear both;
  -webkit-animation: ${ChaseAnimation} 2.5s infinite linear both;
`

type ChaseDotProps = {
  color: string
}

export const ChaseDot = styled.div<ChaseDotProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${ChaseDotAnimation} 2s infinite ease-in-out both;
  -webkit-animation: ${ChaseDotAnimation} 2s infinite ease-in-out both;
  &:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${props => props.color || props.theme.colors.primary};
    border-radius: 100%;
    animation: ${ChaseDotBeforeAnimation} 2s infinite ease-in-out both;
    -webkit-animation: ${ChaseDotBeforeAnimation} 2s infinite ease-in-out both;
  }
  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
`
