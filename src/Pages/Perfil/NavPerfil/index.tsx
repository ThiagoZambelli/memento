import React from "react";
import styles from "./NavPerfil.module.scss";
import Menu from "./Menu";

interface INavPerfilProps {
  meuNome: string;
}

function NavPerfil({ meuNome }: INavPerfilProps) { 

  return (
    <section className={styles.NavPerfil}>
      <img
        className={styles.NavPerfil__img}
        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
        alt=""
      />
      <span>{meuNome}</span>
      <Menu />
    </section>
  );
}

export default NavPerfil;
