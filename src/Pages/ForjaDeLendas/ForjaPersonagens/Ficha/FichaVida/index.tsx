import React from 'react'
import styles from './FichaVida.module.scss';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';

function FichaVida({ ...fichaEscolhida }: IPersonagensProntos) {
    return (
        <section className={styles.fichaVida}>
            <div>
                <div className={styles.fichaVida__inspiracao}>
                    <span>0</span>
                    <p>Inspiração</p>
                </div>
                <div className={styles.fichaVida__proeficiencia}>
                    <span>0</span>
                    <p>Bônus de Proficiência</p>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}

export default FichaVida