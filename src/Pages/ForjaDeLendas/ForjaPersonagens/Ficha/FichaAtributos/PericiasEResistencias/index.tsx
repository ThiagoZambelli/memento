import React from 'react'
import styles from './PericiasEResistencias.module.scss';
import Resistencias from './Resistencias';
import Pericias from './Pericias';

function PericiasEResistencias() {
  return (
    <section className={styles.periciasEresistencias}>        
        <Resistencias />
        <Pericias />
    </section>
  )
}

export default PericiasEResistencias