import React from "react";
import styles from "./NavPerfil.module.scss";
import { useMediaQuery } from "react-responsive";

interface INavPerfilProps {
  meuNome: string;
}

function NavPerfil({ meuNome }: INavPerfilProps) {
  const telaMobile = useMediaQuery({ query: "(max-width: 780px)" });

  return (
    <section
      className={`${styles.NavPerfil} ${
        telaMobile ? styles.NavPerfil__top : styles.NavPerfil__lateral
      }`}
    >
      <img
        className={styles.NavPerfil__img}
        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
        alt=""
      />
      <span>{meuNome}</span>
    </section>
  );
}

export default NavPerfil;
