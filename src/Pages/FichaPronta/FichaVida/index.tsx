import React from 'react'
import styles from './FichaVida.module.scss';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import useGeraProeficiencia from './hook/useGeraProeficiencia';
import Vida from './Vida';
import Level from './Level';

function FichaVida({ ...fichaEscolhida }: IPersonagensProntos) {

    
    return (
        <section className={styles.fichaVida}>
             <div className={styles.fichaVida__container}>
                <Level lvl={fichaEscolhida.lvl!} />
            </div>
            <div className={styles.fichaVida__container}>
                <Vida lvl={fichaEscolhida.lvl!} vida={fichaEscolhida.vida || 0} con={fichaEscolhida.atributos![2]} dado={fichaEscolhida.classe?.dadoVida!} />
            </div>           
            <div className={styles.fichaVida__container}>
                <div className={styles.fichaVida__container__inspiracao}>
                    <span>0</span>
                    <p>Inspiração</p>
                </div>
                <div className={styles.fichaVida__container__proeficiencia}>
                    <span>{useGeraProeficiencia(fichaEscolhida.lvl)}</span>
                    <p>Bônus de Proficiência</p>
                </div>
            </div>
        </section>
    )
}

export default FichaVida