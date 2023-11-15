import React from "react";
import styled from "styled-components";
import bg from 'assets/img/primeiraPagina.jpg'
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";
import Intro from "./Intro";


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
      <Intro />
      <SegundaTela />
      <TerceiraTela />      
    </TelaStyled>
  );
}

export default LandingPage;
