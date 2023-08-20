import React from 'react'
import styles from "./CardPersonagem.module.scss";
import IPersonagensProntos from 'Pages/ForjaDeLendas/Forja/ForjaCriacao/interface/IPersonagensProntos';

function CardPersonagem(personagem: IPersonagensProntos) {
  return (
    <section className={styles.card}>
        <header>
            <h3>{personagem.nomePersonagem}</h3>
            <h4><span>Jogador:</span>{personagem.nomeJogador}</h4>
        </header>
        <div>
            <p>{personagem.raca.nome}</p>
            <p>{personagem.antecedente.nome}</p>
            <p>{personagem.classe.nome}</p>            
        </div>
    </section>
  )
}

export default CardPersonagem