import React from 'react'
import styles from './PaginaErro.module.scss';
import logo from 'assets/logoLithtleZ.svg';
import { LzBotao } from 'lithtlez-ds';
import { useNavigate } from 'react-router-dom';

function PaginaErro() {
  const viajar = useNavigate();

  const voltarAoInicio = () => {
    viajar('/')
  }
  return (
    <section className={styles.erro}>
      <img src={logo} alt="Logo da lithtleZ" />
      <div>
        <span>Ops! Algo deu errado.</span>
        <LzBotao onClick={voltarAoInicio} tipo='secundario' forma='gota'>Voltar ao Inicio</LzBotao>
      </div>
    </section>
  )
}

export default PaginaErro