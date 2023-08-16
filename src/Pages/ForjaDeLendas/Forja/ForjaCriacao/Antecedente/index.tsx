import useAtualizaAntecedente from 'Pages/ForjaDeLendas/state/hooks/useAtualizaAntecedente';
import useBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useBannerMostrado';
import { getAntecedentes } from 'Services/antecedentes';
import IAntecedente from 'interface/IAntecedente';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Antecedentes.module.scss';
import MenuTop from '../componentes/MenuTop';
import MenuSide from '../componentes/MenuSide';
import BannerItem from '../componentes/BannerItem';
import Loader from 'Components/Loader';
import {GiAnvil} from 'react-icons/gi'

function Antecedente() {
  const [antecedente, setAntecedente] = useState<IAntecedente[]>([]);
  const itemMostrado = useBannerMostrado();
  const atualizaRaca = useAtualizaAntecedente();
  const ir = useNavigate();

  const escolher = () => {
    atualizaRaca(itemMostrado._id);
    ir('/forja/cricao/antecedente');
  }

  const telaPequena = window.innerWidth <= 780;

  useEffect(() => {
    pegaAntecedentes();
  }, [])

  const pegaAntecedentes = async () => {
    setAntecedente(await getAntecedentes());
  }

  return (
    <section className={styles.antecedente}>
      <h2 className={styles.antecedente__titulo}>Antecedentes</h2>
      <p className={styles.antecedente__descricao}>Todo mundo tem um passado, ele te prepara para melhor trilhar o Futuro.</p>
      {antecedente.length > 0 ? telaPequena ? <MenuTop Opcoes={antecedente} /> : '' : <Loader />}
      {antecedente.length > 0
        ? <section className={styles.antecedente__opcoes}>
          {telaPequena ? '' : <MenuSide Opcoes={antecedente} />}
          <BannerItem {...itemMostrado} />
        </section>
        : <Loader />}
        <button onClick={escolher} className={styles.antecedente__btn}><GiAnvil /></button>
    </section>
  )
}

export default Antecedente