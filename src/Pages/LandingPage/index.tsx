import React from "react";
import PrimeiraTela from "./PrimeiraTela";
import styled from "styled-components";
import bg from 'assets/img/primeiraPagina.jpg'
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";
import Vagalumes from "./Components/Vagalumes";

const TelaStyled = styled.section`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    gap: 12rem;    
    display: flex;
    flex-direction: column;
    user-select: none;    
`;

function LandingPage() {
  return (
    <TelaStyled>
      {[...Array(20)].map((_, index) => (
        <Vagalumes key={index} />
      ))}
      <PrimeiraTela />
      <SegundaTela />
      <TerceiraTela />      
    </TelaStyled>
  );
}

export default LandingPage;
