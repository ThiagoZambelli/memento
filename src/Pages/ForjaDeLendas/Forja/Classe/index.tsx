import useAtualizaClasse from 'Pages/ForjaDeLendas/state/hooks/useAtualizaClasse';
import useBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useBannerMostrado';
import { getClasses } from 'Services/classes';
import IClasse from 'interface/IClasse';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Classe.module.scss';
import Loader from 'Components/Loader';
import { GiAnvil } from 'react-icons/gi'
import { postPersonagem } from 'Services/personagem';
import { useRecoilValue } from 'recoil';
import { personagemCriacao } from 'state/atom';
import MenuTop from 'Pages/ForjaDeLendas/components/MenuTop';
import MenuSide from 'Pages/ForjaDeLendas/components/MenuSide';
import BannerItem from 'Pages/ForjaDeLendas/components/BannerItem';
import BtnComum from 'Components/BtnComum';
import { useMediaQuery } from 'react-responsive';


function Classe() {
  const [classe, setClasse] = useState<IClasse[]>([]);
  const [carregando, setCarregando] = useState(false);
  const itemMostrado = useBannerMostrado();
  const atualizaClasse = useAtualizaClasse();
  const ir = useNavigate();
  const personagemAtual = useRecoilValue(personagemCriacao);  
  const telaPequena = useMediaQuery({ query: '(max-width: 780px)' });




  const escolher = async () => {
    setCarregando(true)
    try {
      await postPersonagem(personagemAtual);
      setCarregando(false);
      ir('/forja-de-lendas/personagens');
    }
    catch (err) {
      console.log(err)
      setCarregando(false)
    }
  }

  useEffect(() => {
    pegaClasse();
  }, [])

  useEffect(() => {
    if (itemMostrado && itemMostrado._id !== undefined) {
      atualizaClasse(itemMostrado._id);
    }
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
          <BannerItem tipo='classe' {...itemMostrado} />
        </section>
        : <Loader />}
      {!carregando
        ? <BtnComum onClick={escolher}><GiAnvil /> Forjar...</BtnComum>
        : <Loader />}
    </section>
  )
}

export default Classe