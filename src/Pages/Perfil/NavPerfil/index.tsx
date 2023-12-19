import React from "react";
import styles from "./NavPerfil.module.scss";
import MenuMobile from "./MenuMobile";
import MenuNaoMobile from "./MenuNaoMobile";


interface INavPerfilProps {
  meuNome: string;
  meuEmail:string;
  telaMobile:boolean
}

function NavPerfil({telaMobile, meuNome, meuEmail}: INavPerfilProps) { 

  return (
    <section className={`${styles.NavPerfil} ${telaMobile ? styles.NavPerfil__mobile : styles.NavPerfil__naoMobile}`}>
      <img
        className={styles.NavPerfil__img}
        src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
        alt=""
      />
      <span className={styles.NavPerfil__name}>{meuNome}</span>
      <p className={styles.NavPerfil__email}>{`( ${meuEmail} )`}</p>
      {telaMobile ? <MenuMobile /> : <MenuNaoMobile />}
    </section>
  );
}

export default NavPerfil;
