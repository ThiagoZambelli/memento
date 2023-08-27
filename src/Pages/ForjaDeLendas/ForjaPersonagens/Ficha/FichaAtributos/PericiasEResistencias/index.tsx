import React from 'react'
import styles from './PericiasEResistencias.module.scss';
import Resistencias from './Resistencias';
import Pericias from './Pericias';

function PericiasEResistencias() {
  return (
    <section className={styles.periciasEresistencias}>
        <div className={styles.periciasEresistencias__inspiracao}>
            <span>0</span>
            <p>Inspiração</p>
        </div>
        <div className={styles.periciasEresistencias__proeficiencia}>
            <span>0</span>
            <p>Bônus de Proficiência</p>
        </div>
        <Resistencias />
        <Pericias />
    </section>
  )
}

export default PericiasEResistencias