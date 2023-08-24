import { LzInput } from 'lithtlez-ds'
import React, { useEffect, useState } from 'react'
import styles from "./Forja.module.scss";
import { useNavigate } from 'react-router-dom';
import { GiAnvil } from 'react-icons/gi'
import useAtualizaNomes from 'Pages/ForjaDeLendas/state/hooks/useAtualizaNomes';
import { useRecoilValue } from 'recoil';
import { logado, userLogado } from 'state/atom';
import NaoLogado from 'Components/NaoLogado';
import BtnForja from 'Pages/ForjaDeLendas/components/BtnForja';

function Forja() {
  const nomeLogado = useRecoilValue(userLogado);
  const [nomeJogador, setNomeJogador] = useState('');
  const [nomePersonagem, setNomePersonagem] = useState('');
  const att = useAtualizaNomes();
  const ir = useNavigate();
  const estadoLogado = useRecoilValue(logado);

  useEffect(()=>{
    setNomeJogador(nomeLogado);
  }, [])

  const atualizacao = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    att(nomePersonagem, nomeJogador);
    ir('/forja/cricao/raca')
  }

  const habilitaBotao = nomeJogador !== '' && nomePersonagem !== '';



  return (
    estadoLogado ? <section className={styles.forja}>
      <h2>Nomes</h2>
      <p>O primeiro passo para uma grande história é dar um nome para o rumo que ela ira tomar!</p>
      <form onSubmit={atualizacao}>
        <fieldset>
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Jogador' value={nomeJogador} onChange={setNomeJogador} />
          <LzInput corPrimaria='#22333bff' corSecundaria='#c6ac8fff' label='Nome do Personagem' onChange={setNomePersonagem} value={nomePersonagem} />
        </fieldset>        
        <BtnForja disabled={!habilitaBotao}><GiAnvil /> Forjar...</BtnForja>
      </form>
    </section> : <NaoLogado />
  )
}

export default Forja