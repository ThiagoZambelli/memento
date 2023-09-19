import React, { useEffect, useState } from 'react'
import styles from './ContosDoBardo.module.scss';
import Banner from './Components/Banner'
import usePegaEstadoModo from './state/hooks/usePegaEstadoModo';

function ContosDoBardo() {
  const modoDoEstado = usePegaEstadoModo();
  const [modoDaPagina, setModoDaPagina] = useState<boolean>(modoDoEstado);

  useEffect(() => {
    setModoDaPagina(modoDoEstado)
  }, [modoDoEstado]) 

  return (
    <section className={`${!modoDaPagina ? styles.contosDoBardo__claro : styles.contosDoBardo__escuro}`} >
      <Banner modoClaro={modoDaPagina} />
    </section>
  )
}

export default ContosDoBardo