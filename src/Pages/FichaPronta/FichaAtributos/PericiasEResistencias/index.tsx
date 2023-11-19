import React from 'react'
import styles from './PericiasEResistencias.module.scss';
import Resistencias from './Resistencias';
import Pericias from './Pericias';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';

function PericiasEResistencias(fichaEscolhida: IPersonagensProntos) {
  return (
    <section className={styles.periciasEresistencias}>        
        <Resistencias {...fichaEscolhida} />
        <Pericias {...fichaEscolhida} />
    </section>
  )
}

export default PericiasEResistencias