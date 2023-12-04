import Carregamento from "Components/Carregamento";
import { getConto } from "Services/contos";
import IConto from "interface/IConto";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ContoDescricao.module.scss";
import Tag from "./Tag";
import LinhaCapitulo from "./LinhaCapitulo";
import styled from "styled-components";
import usePegaEstadoModo from "../state/hooks/usePegaEstadoModo";
import Comentarios from "../Components/Comentarios";
import { FaShareAltSquare } from "react-icons/fa";

interface ModoProps {
  modo: boolean;
}
const ImgEstilizada = styled.img<ModoProps>`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  animation: pulsarImg infinite 2s;

  @keyframes pulsarImg {
    0% {
      box-shadow: 0 0 6px ${(props) => (props.modo ? `#C2D0B5` : `#244549`)};
      opacity: 1;
    }
    25%,
    50% {
      box-shadow: 0 0 6px ${(props) => (props.modo ? `#C2D0B5` : `#244549`)},
        0 0 12px ${(props) => (props.modo ? `#C2D0B5` : `#244549`)},
        0 0 18px ${(props) => (props.modo ? `#C2D0B5` : `#244549`)};
      opacity: 0.8;
    }
    100% {
      box-shadow: 0 0 6px ${(props) => (props.modo ? `#C2D0B5` : `#244549`)};
      opacity: 1;
    }
  }
`;
const TituloEstilizada = styled.h3<ModoProps>`
  font-size: 2.2rem;
  text-align: center;
  color: ${(props) => (props.modo ? `#C2D0B5` : `#244549`)};
`;
const DescricaoEstilizada = styled.p<ModoProps>`
  font-size: 1.3rem;
  text-align: justify;
  color: ${(props) => (props.modo ? `#C2D0B5` : `#244549`)};
`;

function ContoDescricao() {
  const [conto, setConto] = useState<IConto>();
  const [recarregar, setRecarregar] = useState(0);
  const idConto = useLocation().pathname.replace(
    "/contos-do-bardo/descricao/",
    ""
  );
  const modoDoEstado = usePegaEstadoModo();
  const [modoDaPagina, setModoDaPagina] = useState<boolean>(modoDoEstado);

  const compartilharConto = async () => {
    try {
      if (navigator.share) {
        // Se a API Web Share estiver disponível
        await navigator.share({
          title: `Leia essa incrível história!`,
          text: `Essa é: ${conto?.titulo}`,
          url: window.location.href,
        });
      } else {
        // Se a API Web Share não estiver disponível
        throw new Error("API Web Share não suportada no navegador.");
      }
    } catch (error) {
      // Lidar com erros, por exemplo, mostrar uma mensagem ao usuário
      console.error("Erro ao compartilhar:", error);
    }
  };

  const pegaConto = async () => {
    setConto(await getConto(idConto));
  };

  useEffect(() => {
    setModoDaPagina(modoDoEstado);
  }, [modoDoEstado]);

  useEffect(() => {
    pegaConto();
  }, []);

  useEffect(() => {
    pegaConto();
  }, [recarregar]);

  return (
    <section className={styles.aling}>
      {!conto ? (
        <Carregamento />
      ) : (
        <>
          <section className={styles.container}>
            <span className={styles.container__share}>
              <FaShareAltSquare onClick={() => compartilharConto()} />
            </span>
            <header>
              <ImgEstilizada
                modo={modoDaPagina}
                src={conto.img}
                alt="Imagem da capa do conto"
              />
              <div>
                <TituloEstilizada modo={modoDaPagina}>
                  {conto.titulo}
                </TituloEstilizada>
                <DescricaoEstilizada modo={modoDaPagina}>
                  {conto.descricao}
                </DescricaoEstilizada>
              </div>
            </header>
            <div className={styles.container__tags}>
              {conto.tags &&
                conto.tags.map((e, i) => (
                  <Tag key={i} modo={modoDaPagina} tag={e} />
                ))}
            </div>
            <div className={styles.container__capitulos}>
              {conto.capitulos &&
                conto.capitulos.map((e) => (
                  <LinhaCapitulo modo={modoDaPagina} key={e.id} {...e} />
                ))}
            </div>
          </section>
          <Comentarios
            reacarregar={recarregar}
            setRecarregar={setRecarregar}
            idConto={idConto}
            lista={conto.comentarios}
          />
        </>
      )}
    </section>
  );
}

export default ContoDescricao;
