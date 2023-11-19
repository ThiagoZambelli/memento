import React, { useEffect, useState } from "react";
import styles from "./Resistencias.module.scss";
import usePegaModificador from "../../hook/usePegaModficador";
import { TbShieldUp } from "react-icons/tb";
import useGeraProeficiencia from "../../../FichaVida/hook/useGeraProeficiencia";
import IPersonagensProntos from "Pages/ForjaDeLendas/interface/IPersonagensProntos";

function Resistencias(fichaEscolhida: IPersonagensProntos) {
  const [res1, setRes1] = useState(fichaEscolhida.classe?.testeResistencia[0]!);
  const [res2, setRes2] = useState(fichaEscolhida.classe?.testeResistencia[1]!);
  const [atributos, setAtributos] = useState<number[]>(fichaEscolhida.atributos || [10, 10, 10, 10, 10, 10]);
  const modificador = usePegaModificador();
  const [proeficiencia, setProeficiencia] = useState(
    useGeraProeficiencia(fichaEscolhida.lvl)
  );  

  const iguala = (resistencia: string) => {
    return resistencia === res1 || resistencia === res2;
  };

  return (
    <section className={styles.resistenciasContainers}>
      <div className={styles.resistenciasContainers__body}>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Força") && <TbShieldUp />}
          <span>Força</span>
          <p>
            {iguala("Força")
              ? modificador(atributos![0]) + proeficiencia!
              : modificador(atributos![0])}
          </p>
        </div>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Destreza") && <TbShieldUp />}
          <span>Destreza</span>
          <p>
            {iguala("Destreza")
              ? modificador(atributos![1]) + proeficiencia!
              : modificador(atributos![1])}
          </p>
        </div>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Constituição") && <TbShieldUp />}
          <span>Constituição</span>
          <p>
            {iguala("Constituição")
              ? modificador(atributos![2]) + proeficiencia!
              : modificador(atributos![2])}
          </p>
        </div>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Inteligência") && <TbShieldUp />}
          <span>Inteligência</span>
          <p>
            {iguala("Inteligência")
              ? modificador(atributos![3]) + proeficiencia!
              : modificador(atributos![3])}
          </p>
        </div>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Sabedoria") && <TbShieldUp />}
          <span>Sabedoria</span>
          <p>
            {iguala("Sabedoria")
              ? modificador(atributos![4]) + proeficiencia!
              : modificador(atributos![4])}
          </p>
        </div>
        <div className={styles.resistenciasContainers__body__reistencia}>
          {iguala("Carisma") && <TbShieldUp />}
          <span>Carisma</span>
          <p>
            {iguala("Carisma")
              ? modificador(atributos![5]) + proeficiencia!
              : modificador(atributos![5])}
          </p>
        </div>
      </div>
      <p className={styles.resistenciasContainers__titulo}>
        Testes de Rêsistencia
      </p>
    </section>
  );
}

export default Resistencias;
