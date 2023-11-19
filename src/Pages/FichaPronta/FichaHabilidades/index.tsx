import React from 'react'
import styles from './FichaHabilidades.module.scss';
import CardTexto from './CardTexto';
import Habilidades from './Habilidades';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';

function FichaHabilidades(fichaEscolhida: IPersonagensProntos) {   

    return (
        <section className={styles.fichaHabilidades}>
            <CardTexto titulo='Traços De Personalidades' texto={fichaEscolhida.tracoDePersonalidade!} />
            <CardTexto titulo='Ideais' texto={fichaEscolhida.ideais!} />
            <CardTexto titulo='Vinculos' texto={fichaEscolhida.vinculo!} />
            <CardTexto titulo='Fraquezas' texto={fichaEscolhida.fraqueza!} />
            <Habilidades {...fichaEscolhida} />
        </section>
    )
}

export default FichaHabilidades