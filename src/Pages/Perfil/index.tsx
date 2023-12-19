import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { logado } from "state/atom";
import styles from "./Perfil.module.scss";
import NavPerfil from "./NavPerfil";
import usePerfilService from "Services/usePerfilService";
import LoaderPerfil from "Components/LoaderPerfil";
import ContosFavoritos from "./ContosFavoritos";
import MeusPersonagens from "./MeusPersonagens";

function Perfil() {
  const ir = useNavigate();
  const estadoLogado = useRecoilValue(logado);
  const { loading, meuPerfil, pegaMeuPerfil, telaMobile } = usePerfilService();

  useEffect(() => {
    if (!estadoLogado) {
      ir("/");
    }
    pegaMeuPerfil();
  }, []);

  return (
    <section
      className={`${styles.perfil} ${telaMobile ? styles.perfil__top : styles.perfil__lateral
        }`}
    >
      {!loading ? (
        <>
          <NavPerfil meuEmail={meuPerfil?.email!} meuNome={meuPerfil?.nome!} telaMobile={telaMobile} />
          <div className={`${telaMobile ? styles.perfil__top__body : styles.perfil__lateral__body }`}>
            <MeusPersonagens />
            <ContosFavoritos />
          </div>
        </>
      ) : (
        <div className={styles.loading}>
          <LoaderPerfil />
        </div>
      )}
    </section>
  );
}

export default Perfil;
