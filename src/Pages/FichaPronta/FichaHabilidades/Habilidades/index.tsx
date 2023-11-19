import React, { useEffect, useState } from "react";
import Habilidade from "./Habilidade";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { useRecoilValue } from "recoil";
import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { AiOutlineClose } from "react-icons/ai";
import BtnComum from "Components/BtnComum";
import IHabilidade from "interface/IHabilidade";
import useAtualizaHabilidades from "Pages/ForjaDeLendas/state/hooks/useAtualizaHabilidades";
import { atualizaPersonagem } from "Services/personagem";
import Loader from "Components/Loader";
import IPersonagensProntos from "Pages/ForjaDeLendas/interface/IPersonagensProntos";


const HabilidadesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 1rem 0;
  gap: 1rem;
`;
const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }

  svg {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const TituloStyled = styled.h3`
  align-self: flex-start;
  font-size: 2rem;
  border-bottom: 2px solid;
  color: #c52a2a;
  padding: 0 0.5rem;
  font-family: "Delius Swash Caps", cursive;
  margin-bottom: 1em;
`;

const ModalmodificaHabilidadeStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid #6a473c;
  border-radius: 10px;
  width: 350px;
  gap: 1rem;
  background-color: rgba(125, 89, 76, 0.2);
  backdrop-filter: blur(2px);

  svg {
    cursor: pointer;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.5rem;

    input,
    textarea {
      width: 100%;
      background-color: transparent;
      border: 2px solid #6a473c;
      border-radius: 10px;
      padding: 0.5em;
      resize: none;
      overflow: auto;
    }
    button {
      align-self: center;
      margin: 1em 0;
      font-size: 1.2rem;
    }
  }
`;

function Habilidades( fichaEscolhida: IPersonagensProntos) {  
  const [listaHabilidades, setListaHabilidades] = useState<IHabilidade[]>(
    fichaEscolhida.habilidades || []
  ); 
  
  return (
      <HabilidadesStyled>
        <HeaderStyled>
          <TituloStyled>Habilidades</TituloStyled>          
        </HeaderStyled>
        {listaHabilidades.length > 0 ? (
          listaHabilidades.map((e) => (
            <Habilidade key={e.nome} {...e} />
          ))
        ) : (
          <span>Sem Habilidades</span>
        )}
      </HabilidadesStyled> 
  );
}

export default Habilidades;
