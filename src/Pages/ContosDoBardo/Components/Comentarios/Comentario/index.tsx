import IComentario from "interface/IComentario";
import React from "react";
import { HiChatAlt } from "react-icons/hi";
import styles from './Comentario.module.scss';

function Comentario({ id, texto, user }: IComentario) {
  return (
    <section key={id} className={styles.comentario}>
      <h3 className={styles.comentario__user}>
        <HiChatAlt />
        {user}
      </h3>
      <p className={styles.comentario__texto}>{texto}</p>
    </section>
  );
}

export default Comentario;
