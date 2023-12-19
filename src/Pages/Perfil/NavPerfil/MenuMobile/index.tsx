import React from "react";
import styles from "./MenuMobile.module.scss";


function MenuMobile() {  

  return (    
   <nav className={styles.menu}>
    {/* <a href="#info">Informações</a> */}
    <a href="#personagens">Personagens</a>
    <a href="#contosFavoritos">Contos Favoritos</a>
   </nav>

  );
}

export default MenuMobile;
