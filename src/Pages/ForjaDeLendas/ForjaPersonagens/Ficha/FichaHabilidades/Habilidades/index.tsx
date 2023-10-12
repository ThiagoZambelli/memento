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

function Habilidades() {
  const [estadoDeletar, setEstadoDeletar] = useState(false);
  const fichaEscolhida = useRecoilValue(ficha);
  const [listaHabilidades, setListaHabilidades] = useState<IHabilidade[]>(
    fichaEscolhida.habilidades || []
  );
  const atualizaHabilidades = useAtualizaHabilidades();

  const [modalAberto, setModalAberto] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaOrigem, setNovaOrigem] = useState("");
  const [carregando, setCarregando] = useState(false)

  const mudarEstadoDeletar = () => {
    setEstadoDeletar(!estadoDeletar);
  };

  const novaListaHabilidades = (acao: "del" | "add", nome?: string) => {
    if (acao === "add") {
      if (fichaEscolhida.habilidades) {
        const lista = [
          ...fichaEscolhida.habilidades,
          { nome: novoNome, descricao: novaDescricao, origem: novaOrigem },
        ];
        return lista;
      } else {
        const lista = [
          { nome: novoNome, descricao: novaDescricao, origem: novaOrigem },
        ];
        return lista;
      }
    } else if (acao === "del") {
      const lista = fichaEscolhida.habilidades!.filter(
        (obj) => obj.nome !== nome
      );
      return lista;
    }
  };

  const deletarHabilidade = async (nome: string) => {    
    const novaHabilidade = novaListaHabilidades("del", nome);
    atualizaHabilidades(novaHabilidade!);
    await atualizaPersonagem("habilidades", novaHabilidade!, fichaEscolhida._id);   
  };
  const cadastrarHabilidade = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true)
    const novaHabilidade = novaListaHabilidades("add");
    atualizaHabilidades(novaHabilidade!);
    setNovaDescricao('');
    setNovoNome('');
    setNovaOrigem('');
    await atualizaPersonagem("habilidades", novaHabilidade!, fichaEscolhida._id);
    setCarregando(false)
    setModalAberto(false);
  };

  useEffect(() => {
    setListaHabilidades(fichaEscolhida.habilidades || []);
  }, [fichaEscolhida.habilidades]);

  return (
    <>
      <HabilidadesStyled>
        <HeaderStyled>
          <TituloStyled>Habilidades</TituloStyled>
          <div>
            <TiPlus onClick={() => setModalAberto(!modalAberto)} />
            <BsPencilSquare onClick={mudarEstadoDeletar} />
          </div>
        </HeaderStyled>
        {listaHabilidades.length > 0 ? (
          listaHabilidades.map((e) => (
            <Habilidade deletarHabilidade={deletarHabilidade} delet={estadoDeletar} {...e} />
          ))
        ) : (
          <span>Sem Habilidades</span>
        )}
      </HabilidadesStyled>
      {modalAberto && (
        <ModalmodificaHabilidadeStyled onSubmit={cadastrarHabilidade}>
          <header>
            <h3>Nova Habilidade</h3>
            <AiOutlineClose onClick={() => setModalAberto(!modalAberto)} />
          </header>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
            <label htmlFor="origem">Origem da Habilidade</label>
            <input
              id="origem"
              value={novaOrigem}
              onChange={(e) => setNovaOrigem(e.target.value)}
            />
            <label htmlFor="descricao">Descrição</label>
            <textarea
              rows={4}
              id="descricao"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
            ></textarea>
            {!carregando ? <BtnComum>Cadastrar</BtnComum> : <Loader />}
          </div>
        </ModalmodificaHabilidadeStyled>
      )}
    </>
  );
}

export default Habilidades;
