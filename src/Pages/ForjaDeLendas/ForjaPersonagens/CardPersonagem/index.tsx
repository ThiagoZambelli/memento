import React from 'react'
import styles from "./CardPersonagem.module.scss";
import {GiBookmarklet, GiDna1, GiDramaMasks,GiMasterOfArms} from "react-icons/gi"
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';


function CardPersonagem(personagem: IPersonagensProntos) {
  return (
    <section className={styles.card}>
        <header>
            <h3><GiDramaMasks /><p>{personagem.nomePersonagem}</p></h3>
            <h4><span>Jogador:</span>{personagem.nomeJogador}</h4>
        </header>
        <div>
            <p><GiDna1 />{personagem.raca.nome}</p>
            <p><GiBookmarklet />{personagem.antecedente.nome}</p>
            <p><GiMasterOfArms />{personagem.classe.nome}</p>            
        </div>
    </section>
  )
}

export default CardPersonagem