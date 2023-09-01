import React, { useState } from 'react'
import styles from "./CardPersonagem.module.scss";
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import {useSetRecoilState } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import { useNavigate } from 'react-router-dom';
import useAbreModalUrl from 'state/hooks/useAbreModalUrl';


function CardPersonagem(personagem: IPersonagensProntos) {
  const setFicha = useSetRecoilState(ficha);  
  const [imagem, setImagem] = useState("https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png")
  const ir = useNavigate();

 
  const aoClicar = () => {
    setFicha({ ...personagem });
    ir('/forja-de-lendas/ficha');
  }
  return (
    <section className={styles.card} onClick={aoClicar}>
      <header className={styles.card__nome}><h2>{personagem.nomePersonagem}</h2></header>
      <div style={{backgroundImage:`url(${imagem})`}} className={styles.card__imagem}></div>
      <div className={styles.card__body}>
        <h3>{personagem.classe?.nome}</h3>
        <div>
          <p>{personagem.raca?.nome}</p>
          <p>{personagem.antecedente?.nome}</p>
        </div>
        <span>Jogador: {personagem.nomeJogador}</span>
      </div>
    </section>
  )
}

export default CardPersonagem