import React, { useEffect } from 'react'
import styles from "./CardPersonagem.module.scss";
import { GiBookmarklet, GiDna1, GiDramaMasks, GiMasterOfArms } from "react-icons/gi"
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import { useNavigate } from 'react-router-dom';


function CardPersonagem(personagem: IPersonagensProntos) {
  const setFicha = useSetRecoilState(ficha);
  const fichaPronta = useRecoilValue(ficha);
  const ir = useNavigate();

  // useEffect(()=>{
  //   
  // },[fichaPronta])
  const aoClicar = () => {
    setFicha({ ...personagem });
    ir('/forja-de-lendas/ficha');
  }
  return (
    <section className={styles.card} onClick={aoClicar}>
      <header>
        <h3><GiDramaMasks /><p>{personagem.nomePersonagem}</p></h3>
        <h4><span>Jogador:</span>{personagem.nomeJogador}</h4>
      </header>
      <div>
        {personagem.raca && <p><GiDna1 />{personagem.raca.nome}</p>}
        {personagem.antecedente && <p><GiBookmarklet />{personagem.antecedente.nome}</p>}
        {personagem.classe && <p><GiMasterOfArms />{personagem.classe.nome}</p>}
      </div>
    </section>
  )
}

export default CardPersonagem