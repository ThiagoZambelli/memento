import React, { useState } from 'react'
import styles from "./CardPersonagem.module.scss";
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import { useSetRecoilState } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import { useNavigate } from 'react-router-dom';
import { GiArchiveResearch } from 'react-icons/gi'
import { BsGearFill } from "react-icons/bs";
import { LzBotao, LzInput } from 'lithtlez-ds';
import { GrClose } from 'react-icons/gr'
import useTestaUrl from './hook/useTestaUrl';
import { atualizaImg } from 'Services/personagem';


function CardPersonagem(personagem: IPersonagensProntos) {
  const setFicha = useSetRecoilState(ficha);
  const [novaUrl, setNovaUrl] = useState('');
  const [erro, setErro] = useState(false);
  const [abreModal, setAbreModal] = useState(false);
  const [imagem, setImagem] = useState(personagem.img || "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png")
  const ir = useNavigate();
  const testar = useTestaUrl();

  const mudaImagem = async () => {
    if (testar(novaUrl)) {
      setImagem(novaUrl);
      const id = personagem._id;
      abreModalImagem();
      await atualizaImg(novaUrl, id);
      setNovaUrl('');
    } else {
      setNovaUrl('');
      setErro(true);
    }
  }


  const abreModalImagem = () => {
    setAbreModal(!abreModal)
  }

  const aoClicar = () => {
    setFicha({ ...personagem });
    ir('/forja-de-lendas/ficha');
  }

  return (
    <section className={styles.card}>
      <div key={`${personagem._id}modal`} className={`${styles.card__modal} ${abreModal ? styles.show : ''}`}>
        <button onClick={abreModalImagem} className={styles.card__modal__closeBTN}><GrClose /></button>
        <h3>Insira uma URL com final .png ou .jpg</h3>
        <LzInput value={novaUrl} onChange={setNovaUrl} label='Insira a URL' corPrimaria='#36462F' corSecundaria='#BACEBF' />
        {erro && <p>Url invalida!</p>}
        <LzBotao onClick={mudaImagem} forma='gota' corHover='#64765B' corPrimaria='#36462F'>Cadastrar</LzBotao>
      </div>
      <header className={styles.card__nome}><h2>{personagem.nomePersonagem}</h2></header>
      <div style={{ backgroundImage: `url(${imagem})` }} className={styles.card__imagem}><BsGearFill onClick={abreModalImagem} /></div>
      <div className={styles.card__body} onClick={aoClicar}>
        <h3>{personagem.classe?.nome}</h3>
        <div className={styles.card__body__info}>
          <p>{personagem.raca?.nome}</p>
          <p>{personagem.antecedente?.nome}</p>
          <GiArchiveResearch />
        </div>
        <span>Jogador: {personagem.nomeJogador}</span>
      </div>
    </section>
  )
}

export default CardPersonagem