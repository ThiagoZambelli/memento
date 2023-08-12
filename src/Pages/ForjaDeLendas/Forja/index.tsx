import { LzInput } from 'lithtlez-ds'
import React, { useState } from 'react'
import styles from "./Forja.module.scss";
import useAtualizaNomes from './state/hooks/useAtualizaNomes';
import { useNavigate } from 'react-router-dom';


function Forja() {
  const [nomeJogador, setNomeJogador] = useState('');
  const [nomePersonagem, setNomePersonagem] = useState('');
  const att = useAtualizaNomes();
  const ir = useNavigate();


  const atualizacao = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    att(nomePersonagem, nomeJogador);
    ir('/forja/cricao/raca')
  }

  const habilitaBotao = nomeJogador !== '' && nomePersonagem !== '';



  return (
    <section className={styles.forja}>
      <h2>Nomes</h2>
      <p>O primeiro passo para uma grande história é dar um nome para o rumo que ela ira tomar!</p>
      <form onSubmit={atualizacao}>
        <fieldset>
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Jogador' value={nomeJogador} onChange={setNomeJogador} />
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Personagem' onChange={setNomePersonagem} value={nomePersonagem} />
        </fieldset>
        <button disabled={!habilitaBotao} >Iniciar Forja</button>
      </form>
    </section>
  )
}

export default Forja