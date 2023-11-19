import React from "react";
import usePegaModificador from "../../FichaAtributos/hook/usePegaModficador";
import { GiHeartPlus } from "react-icons/gi";
import styles from "./Vida.module.scss";

interface IVidaProps {
  dado: number;
  con: number;
  vida: number;
  lvl: number;
}

function Vida({ lvl, dado, con, vida }: IVidaProps) {
  const modificador = usePegaModificador();

  return (
    <div className={styles.vida}>
      <div className={styles.vida__maximo}>
        <span>
          {vida + modificador(con) * (lvl - 1) + (dado + modificador(con))}
        </span>
        <p>
          Vida Maxima <GiHeartPlus />
        </p>
      </div>
    </div>
  );
}

export default Vida;
