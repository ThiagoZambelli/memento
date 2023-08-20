import React, { useState, useEffect } from 'react'
import IBannerItem from '../../interface/IBannerItem';
import styles from './MenuTop.module.scss';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import useSetBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useSetBannerMostrado';

interface MenuDeSelecaoProps {
  Opcoes: IBannerItem[];
}

function MenuTop({ Opcoes }: MenuDeSelecaoProps) {
  const setBanner = useSetBannerMostrado();

  const [lugarNaFila, setLugarNaFila] = useState<number>();


  useEffect(() => {
    setLugarNaFila(0);
    setBanner(Opcoes[lugarNaFila!]);
  }, []);



  useEffect(() => {
    setBanner(Opcoes[lugarNaFila!])
  }, [lugarNaFila]);



  const traz = () => {
    if (lugarNaFila === 0) {
      setLugarNaFila(Opcoes.length - 1)
    } else {
      setLugarNaFila(lugarNaFila! - 1)
    }
  }

  const frente = () => {
    if (lugarNaFila === Opcoes.length - 1) {
      setLugarNaFila(0)
    } else {
      setLugarNaFila(lugarNaFila! + 1)
    }
  }

  return (
    <div className={styles.menuTop}>
      <button onClick={traz}><ImArrowLeft2 /></button>
      {Opcoes[lugarNaFila!] ? <p>{Opcoes[lugarNaFila!].nome}</p> : ''}
      <button onClick={frente}><ImArrowRight2 /></button>
    </div>
  )
}

export default MenuTop