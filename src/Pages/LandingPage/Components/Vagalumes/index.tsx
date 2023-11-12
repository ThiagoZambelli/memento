import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0.2;
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
  animation: ${blink} 1s infinite;
  ${({ positionStyle }) => positionStyle}
  animation-delay: ${({ delay }) => delay}s;
  z-index: 2;
`;

function Vagalumes() {
  const delay = Math.random() * (5 - 2) + 2;
  const randomPosition = () => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
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
