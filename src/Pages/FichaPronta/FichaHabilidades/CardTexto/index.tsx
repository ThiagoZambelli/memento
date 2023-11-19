import React from "react";
import styles from "./CardTexto.module.scss";

interface ICardTextoProps {
  titulo: string;
  texto: string;
}

function CardTexto({ titulo, texto }: ICardTextoProps) {
  return (
    <div className={styles.cardTexto}>
      <h3 className={styles.cardTexto__titulo}>{titulo}</h3>
      <p className={styles.cardTexto__texto}>{texto}</p>
    </div>
  );
}

export default CardTexto;
