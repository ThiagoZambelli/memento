import { LzInput } from 'lithtlez-ds'
import React, { useState } from 'react'
import styles from "./Forja.module.scss";

function Forja() {
  const [nomeJogador, setNomeJogador] = useState('');
  const [nomePersonagem, setNomePersonagem] = useState('');

  const habilitaBotao = nomeJogador !== '' && nomePersonagem !== '';

  return (
    <section className={styles.forja}>
      <h2>Nomes</h2>
      <p>O primeiro passo para uma grande história é dar um nome para o rumo que ela ira tomar!</p>
      <form>
        <fieldset>
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Jogador' value={nomeJogador} onChange={setNomeJogador} />
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Personagem' onChange={setNomePersonagem} value={nomePersonagem}/>
        </fieldset>
        <button disabled={!habilitaBotao} >Iniciar Forja</button>
      </form>
    </section>
  )
}

export default Forja