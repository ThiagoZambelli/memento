import { getRacas } from 'Services/racas';
import IRaca from 'interface/IRaca';
import React, { useState, useEffect } from 'react'
import styles from './Racas.module.scss';
import Loader from 'Components/Loader';
import { GiAnvil } from 'react-icons/gi'
import useBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useBannerMostrado';
import { useNavigate } from 'react-router-dom';
import useAtualizaRaca from 'Pages/ForjaDeLendas/state/hooks/useAtualizaRace';
import MenuTop from 'Pages/ForjaDeLendas/components/MenuTop';
import MenuSide from 'Pages/ForjaDeLendas/components/MenuSide';
import BannerItem from 'Pages/ForjaDeLendas/components/BannerItem';
import BtnComum from 'Components/BtnComum';
import { useMediaQuery } from 'react-responsive';


function Racas() {
  const [racas, setRacas] = useState<IRaca[]>([]);
  const itemMostrado = useBannerMostrado();
  const atualizaRaca = useAtualizaRaca();
  const ir = useNavigate();     
  const telaPequena = useMediaQuery({ query: '(max-width: 780px)' });
 

  const escolher = () => {
    atualizaRaca(itemMostrado._id);    
    ir('/forja/cricao/antecedente');
  }


  useEffect(() => {
    pegaRacas();
  }, [])

  const pegaRacas = async () => {
    setRacas(await getRacas());
  }

  return (
    <section className={styles.raca}>
      <h2 className={styles.raca__titulo}>Raças</h2>
      <p className={styles.raca__descricao}>Sua Raça não define quem você é, mas mostra as habilidades que a vida te deu para enfrentar o mundo!</p>
      {racas.length > 0 ? telaPequena ? <MenuTop Opcoes={racas} /> : '' : <Loader />}
      {racas.length > 0
        ? <section className={styles.raca__opcoes}>
          {telaPequena ? '' : <MenuSide Opcoes={racas} />}
          <BannerItem {...itemMostrado} />
        </section>
        : <Loader />}
        <BtnComum onClick={escolher}><GiAnvil /> Forjar...</BtnComum>   
    </section>
  )
}

export default Racas