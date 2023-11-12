import React from "react";
import PrimeiraTela from "./PrimeiraTela";
import styled from "styled-components";
import bg from 'assets/img/primeiraPagina.jpg'
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";
import Footer from "Components/Footer";

const TelaStyled = styled.section`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    gap: 10rem;    
    display: flex;
    flex-direction: column;
    user-select: none;
`;

function LandingPage() {
  return (
    <TelaStyled>
      <PrimeiraTela />
      <SegundaTela />
      <TerceiraTela />      
    </TelaStyled>
  );
}

export default LandingPage;
