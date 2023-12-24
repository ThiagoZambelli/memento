import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "assets/img/primeiraPagina.jpg";
import SegundaTela from "./SegundaTela";
import TerceiraTela from "./TerceiraTela";
import Intro from "./Intro";
import LoaderPerfil from "Components/LoaderPerfil";

const TelaStyled = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  gap: 18rem;
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
    <TelaStyled>
      <Intro />
      <SegundaTela />
      <TerceiraTela />
    </TelaStyled>
  );
}

export default LandingPage;
