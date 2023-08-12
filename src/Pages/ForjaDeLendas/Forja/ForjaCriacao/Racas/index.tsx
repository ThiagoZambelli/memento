import { getRacas } from 'Services/racas';
import IRaca from 'interface/IRaca';
import React, { useState, useEffect } from 'react'
import MenuSide from '../componentes/MenuSide';
import BannerItem from '../componentes/BannerItem';
import useBannerMostrado from '../../state/hooks/useBannerMostrado';
import MenuTop from '../componentes/MenuTop';
import styles from './Racas.module.scss';

function Racas() {
  const [racas, setRacas] = useState<IRaca[]>([]);
  const itemMostrado = useBannerMostrado();

  useEffect(() => {
    pegaRacas();
  }, [])

  const pegaRacas = async () => {
    setRacas(await getRacas());
  }

  return (
    <section className={styles.raca}>
      <h2>Racas</h2>
      <p>Sua Raça não define quem você é, mas mostra as habilidades que a vida te deu para enfrentar o mundo!</p>
      <MenuTop Opcoes={racas} />
      <section className={styles.raca__opcoes}>
        <MenuSide Opcoes={racas} />
        <BannerItem {...itemMostrado} />
      </section>
      <button></button>
      <div>

      </div>
    </section>
  )
}

export default Racas