import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0.2;
    box-shadow: none;
  }
`;

interface VagalumesProps {
  positionStyle: string;
  delay: string;
  tamanho: string;
}

const VagalumesStyled = styled.div<VagalumesProps>`
  position: absolute;
  width: ${({ tamanho }) => tamanho}px;
  height: ${({ tamanho }) => tamanho}px;
  background: #ffff00;
  border-radius: 50%;
  animation: vibrate-1 1.5s linear infinite both, ${blink} 1s infinite;
  ${({ positionStyle }) => positionStyle}
  animation-delay: ${({ delay }) => delay}s;
  box-shadow: 0 0 6px #ffff00;
  z-index: 2;

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-3px, 3px);
              transform: translate(-3px, 3px);
    }
    40% {
      -webkit-transform: translate(-3px, -3px);
              transform: translate(-3px, -3px);
    }
    60% {
      -webkit-transform: translate(3px, 3px);
              transform: translate(3px, 3px);
    }
    80% {
      -webkit-transform: translate(3px, -3px);
              transform: translate(3px, -3px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  }
`;

function Vagalumes() {
  const delay = Math.random() * (5 - 2) + 2;
  const randomPosition = () => {
    const left = Math.random() * 90;
    const top = Math.random() * 90;
    return `
      left: ${left}vw;
      top: ${top}vh;
    `;
  };
  const tamanho = Math.floor(Math.random() * (6 - 3 + 1) + 3);

  return (
    <VagalumesStyled
      positionStyle={randomPosition()}
      delay={delay.toString()}
      tamanho={tamanho.toString()}
    />
  );
}

export default Vagalumes;
