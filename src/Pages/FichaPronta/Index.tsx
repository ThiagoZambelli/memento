import IPersonagensProntos from "Pages/ForjaDeLendas/interface/IPersonagensProntos";
import { getPersonagem } from "Services/personagem";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Ficha.module.scss";
import FichaHeader from "./FichaHeader";
import FichaVida from "./FichaVida";
import MenuMobile from "./MenuMobile";
import { useMediaQuery } from "react-responsive";
import FichaAtributos from "./FichaAtributos";
import FichaHabilidades from "./FichaHabilidades";
import PaginaErro from "Pages/PaginaErro";
import Carregamento from "Components/Carregamento";
import { FaShareAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";



function FichaPronta() {
  const [fichaEscolhida, setFichaEscolhida] = useState<IPersonagensProntos>();
  const path = useLocation().pathname;
  const idPersonagem = path.split("/").pop();
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });
  const [mostraCaracteristicas, setMostraCaracteristicas] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const ir = useNavigate();

  const handleCompartilhar = async () => {
    try {
      if (navigator.share) {
        // Se a API Web Share estiver disponível
        await navigator.share({
          title: `Ficha de personagem!`,
          text: `Essa é a ficha do ${fichaEscolhida?.nomePersonagem}`,
          url: window.location.href,
        });
      } else {
        // Se a API Web Share não estiver disponível
        throw new Error('API Web Share não suportada no navegador.');
      }
    } catch (error) {
      // Lidar com erros, por exemplo, mostrar uma mensagem ao usuário
      console.error('Erro ao compartilhar:', error);
    }
  };


  const pegaPersonagem = async () => {
    setCarregando(true);
    if (idPersonagem) {
      setFichaEscolhida(await getPersonagem(idPersonagem));
    }
    setCarregando(false);
  };
  useEffect(() => {
    pegaPersonagem();
  }, []);

  return (
    <section className={styles.container}>
      <nav className={styles.container__nav}>
        <button>
          <FaShareAlt onClick={() => handleCompartilhar()} />
        </button>        
        <button>
          <AiFillHome onClick={() => ir('/')} />
        </button>
      </nav>
      {carregando ? (
        <Carregamento />
      ) : fichaEscolhida ? (
        <section className={styles.paginaFicha}>
          <section className={styles.paginaFicha__ficha}>
            <FichaHeader {...fichaEscolhida} />
            <FichaVida {...fichaEscolhida} />
            {isMobile && (
              <MenuMobile
                valor={mostraCaracteristicas}
                mudaEstado={setMostraCaracteristicas}
              />
            )}
            <div className={styles.paginaFicha__ficha__body}>
              <div
                className={`${
                  isMobile && mostraCaracteristicas && styles.someDaTela
                }`}
                key={"valores"}
              >
                <FichaAtributos {...fichaEscolhida} />
              </div>
              <div
                className={`${
                  isMobile && !mostraCaracteristicas && styles.someDaTela
                }`}
                key={"caracteristicas"}
              >
                <FichaHabilidades {...fichaEscolhida} />
              </div>
              <div></div>
            </div>
          </section>
        </section>
      ) : (
        <PaginaErro />
      )}
    </section>
  );
}

export default FichaPronta;
