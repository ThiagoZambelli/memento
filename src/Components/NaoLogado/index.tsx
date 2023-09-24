import React from 'react'
import styles from './NaoLogado.module.scss';
import useAbreModalLogin from 'state/hooks/useAbreModalLogin';

function NaoLogado() {
  const abrirModalLogin = useAbreModalLogin();

  return (
    <section className={styles.naoLogado}>
        <h3>Vamos começar uma grande aventura, para isso registre seu nome no tomo das Memórias ou se ja fez o registro me diga quem você é!</h3>
        <h4 onClick={abrirModalLogin}>(Crie uma conta ou faça Login!)</h4>        
    </section>
  )
}

export default NaoLogado