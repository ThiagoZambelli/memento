import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import IHabilidade from "interface/IHabilidade";

interface HabilidadeProps extends IHabilidade {
  delet: boolean;
  deletarHabilidade: (nome: string) => void
}

const HabilidadeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 0.5rem;
  p {
    line-height: 1.5em;
  }
`;
const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-left: 0.5em;
  span {
    font-size: 12px;
    padding: 0.5em;
    border-radius: 10px;
    background-color: #6a473c;
    color: #efe4bf;
    margin: 1em 0;

    strong {
      font-weight: bold;
    }
  }
  p{
    padding: 0.5rem;
  }
`;
const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0 0.5em;

  div {
    display: flex;
    gap: 1em;
    font-size: 1.4rem;
    align-items: center;
    color: #df4040;

    svg {
      width: 1rem;
    }
  }

  svg {
    cursor: pointer;
  }
`;

function Habilidade({
  descricao,
  nome,
  delet,
  origem = "undefined",
  deletarHabilidade
}: HabilidadeProps) {
  const [habilidadeAberta, setHabilidadeAberta] = useState(false);

  return (
    <HabilidadeDiv>
      <HeaderStyled>
        <div>
          <h3>{nome}</h3>
          <BiSolidDownArrow
            onClick={() => setHabilidadeAberta(!habilidadeAberta)}
          />
        </div>
        {delet && <AiFillDelete onClick={() => deletarHabilidade(nome)} />}
      </HeaderStyled>
      {habilidadeAberta && (
        <BodyStyled>
          <span>
            <strong>Origem:</strong> {origem}
          </span>
          <p>{descricao}</p>
        </BodyStyled>
      )}
    </HabilidadeDiv>
  );
}

export default Habilidade;
