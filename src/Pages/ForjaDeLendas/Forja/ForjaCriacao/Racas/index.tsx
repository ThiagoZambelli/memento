import { getRacas } from 'Services/racas';
import IRaca from 'interface/IRaca';
import React, { useState, useEffect } from 'react'
import MenuSide from '../componentes/MenuSide';
import BannerItem from '../componentes/BannerItem';

import MenuTop from '../componentes/MenuTop';
import styles from './Racas.module.scss';
import Loader from 'Components/Loader';
import { GiAnvil } from 'react-icons/gi'
import useBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useBannerMostrado';
import { useNavigate } from 'react-router-dom';
import useAtualizaRaca from 'Pages/ForjaDeLendas/state/hooks/useAtualizaRace';


function Racas() {
  const [racas, setRacas] = useState<IRaca[]>([]);
  const itemMostrado = useBannerMostrado();
  const atualizaRaca = useAtualizaRaca();
  const ir = useNavigate();  
   

  const escolher = () => {
    atualizaRaca(itemMostrado._id);    
    ir('/forja/cricao/antecedente');
  }

  const telaPequena = window.innerWidth <= 780;

  useEffect(() => {
    pegaRacas();
  }, [])

  const pegaRacas = async () => {
    setRacas(await getRacas());
  }

  return (
    <section className={styles.raca}>
      <h2 className={styles.raca__titulo}>Racas</h2>
      <p className={styles.raca__descricao}>Sua Raça não define quem você é, mas mostra as habilidades que a vida te deu para enfrentar o mundo!</p>
      {racas.length > 0 ? telaPequena ? <MenuTop Opcoes={racas} /> : '' : <Loader />}
      {racas.length > 0
        ? <section className={styles.raca__opcoes}>
          {telaPequena ? '' : <MenuSide Opcoes={racas} />}
          <BannerItem {...itemMostrado} />
        </section>
        : <Loader />}
        <button onClick={escolher} className={styles.raca__btn}><GiAnvil /></button>
    </section>
  )
}

export default Racas