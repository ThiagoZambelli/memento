import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "assets/img/primeiraPagina.jpg";
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";
import Intro from "./Intro";
import LoaderPerfil from "Components/LoaderPerfil";
import { useMediaQuery } from "react-responsive";
import Contato from "./Contato";

interface TelaMobile {
  telaMobile: boolean;
}

const TelaStyled = styled.section<TelaMobile>`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  gap:  ${props => (props.telaMobile ? '2rem' : '12rem')};
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const telaMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    // Simulando um carregamento por 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Limpando o timer ao desmontar o componente
  }, []);

  return loading ? (
    <LoadingDiv>
      <LoaderPerfil />
    </LoadingDiv>
  ) : (
    <TelaStyled telaMobile={telaMobile}>
      <Intro />
      <SegundaTela />
      <TerceiraTela />
      <Contato />
    </TelaStyled>
  );
}

export default LandingPage;
