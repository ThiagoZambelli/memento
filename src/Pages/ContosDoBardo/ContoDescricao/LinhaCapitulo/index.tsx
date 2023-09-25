import React, { useState } from 'react'
import { GiRead } from 'react-icons/gi'
import { BiArrowToRight } from 'react-icons/bi'
import styles from './LinhaCapitulo.module.scss';
import Capitulo from './Capitulo';

interface ICapituloProps {
  id: string,
  tituloCap: string,
  conteudo: string[]
  modo: boolean
}

function LinhaCapitulo({ modo, tituloCap, conteudo, id }: ICapituloProps) {
  const [aberto, setAberto] = useState(false);

  const abrirModal = () => {
    setAberto(!aberto)
  }

  return (
    <>
      <div onClick={abrirModal} className={styles.container}><GiRead /><BiArrowToRight /><p>{tituloCap}</p></div>
      {aberto && <Capitulo modo={modo} onClick={abrirModal} tituloCap={tituloCap} conteudo={conteudo} id={id} />}
    </>
  )
}

export default LinhaCapitulo