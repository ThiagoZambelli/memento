import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { logado } from "state/atom";
import styles from "./Perfil.module.scss";
import NavPerfil from "./NavPerfil";
import IPerfil from "interface/IPerfil";
import { getMeuPerfil } from "Services/usuario";
import { useMediaQuery } from "react-responsive";

function Perfil() {
  const ir = useNavigate();
  const estadoLogado = useRecoilValue(logado);
  const [meuPerfil, setMeuPerfil] = useState<IPerfil>();

  const telaMobile = useMediaQuery({ query: "(max-width: 780px)" });

  const pegaMeuPerfil = async () => {
    setMeuPerfil(await getMeuPerfil());
  };

  useEffect(() => {
    if (!estadoLogado) {
      ir("/");
    }
    pegaMeuPerfil();
  }, []);

  return (
    <section className={`${styles.perfil} ${telaMobile ? styles.perfil__top : styles.perfil__lateral}`} >
      <NavPerfil meuNome={meuPerfil?.nome!} />
      <div className={`${telaMobile ? styles.perfil__top__body : styles.perfil__lateral__body}`}>Perfil</div>
    </section>
  );
}

export default Perfil;
