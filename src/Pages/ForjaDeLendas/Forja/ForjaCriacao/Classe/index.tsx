import useAtualizaClasse from 'Pages/ForjaDeLendas/state/hooks/useAtualizaClasse';
import useBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useBannerMostrado';
import { getClasses } from 'Services/classes';
import IClasse from 'interface/IClasse';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Classe.module.scss';
import Loader from 'Components/Loader';
import { GiAnvil } from 'react-icons/gi'
import MenuTop from '../componentes/MenuTop';
import MenuSide from '../componentes/MenuSide';
import BannerItem from '../componentes/BannerItem';
import { postPersonagem } from 'Services/personagem';
import { useRecoilValue } from 'recoil';
import { personagemCriacao } from 'state/atom';


function Classe() {
  const [classe, setClasse] = useState<IClasse[]>([]);
  const itemMostrado = useBannerMostrado();
  const atualizaClasse = useAtualizaClasse();
  const ir = useNavigate();
  const personagemAtual = useRecoilValue(personagemCriacao);
  const telaPequena = window.innerWidth <= 780;


  const cadastrar = () => {
    postPersonagem(personagemAtual);
  }

  const escolher = () => {
    cadastrar();
    ir('/forja-de-lendas');
  }

  useEffect(() => {
    pegaClasse();
  }, [])
  useEffect(() => {
    atualizaClasse(itemMostrado._id);
  }, [itemMostrado])


  const pegaClasse = async () => {
    setClasse(await getClasses());
  }

  return (
    <section className={styles.classe}>
      <h2 className={styles.classe__titulo}>Classe</h2>
      <p className={styles.classe__descricao}>Sua profissão é a forma que você escolheu para lidar com os perigos no caminho.</p>
      {classe.length > 0 ? telaPequena ? <MenuTop Opcoes={classe} /> : '' : <Loader />}
      {classe.length > 0
        ? <section className={styles.classe__opcoes}>
          {telaPequena ? '' : <MenuSide Opcoes={classe} />}
          <BannerItem {...itemMostrado} />
        </section>
        : <Loader />}
      <button onClick={escolher} className={styles.classe__btn}><GiAnvil /></button>
    </section>
  )
}

export default Classe