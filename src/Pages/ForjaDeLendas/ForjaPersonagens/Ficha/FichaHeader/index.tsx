import React from 'react'
import styles from './FichaHeader.module.scss';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';


function FichaHeader({ ...fichaEscolhida }: IPersonagensProntos) {
    return (
        <div className={styles.fichaHeader}>
            <div className={styles.fichaHeader__nomePersonagem}>
                <h2>{fichaEscolhida.nomePersonagem}</h2>
                <p>Nome Personagem</p>
            </div>
            <div className={styles.fichaHeader__body}>
                <div className={styles.fichaHeader__body__top}>
                    <div>
                        <h3>{fichaEscolhida.classe?.nome}</h3>
                        <p>Classe</p>
                    </div>
                    <div>
                        <h3>{fichaEscolhida.antecedente?.nome}</h3>
                        <p>Antecedente</p>
                    </div>
                    <div>
                        <h3>{fichaEscolhida.nomeJogador}</h3>
                        <p>Nome Jogador</p>
                    </div>
                </div>
                <div className={styles.fichaHeader__body__down}>
                    <div>
                        <h3>{fichaEscolhida.raca?.nome}</h3>
                        <p>Raça</p>
                    </div>
                    <div>
                        <h3>N</h3>
                        <p>Tendencia</p>
                    </div>
                    <div>
                        <h3>0000000</h3>
                        <p>Pontos de Experiencia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FichaHeader