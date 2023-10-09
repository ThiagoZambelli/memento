import React, { useState } from 'react'
import styles from './FichaHabilidades.module.scss';
import CardTexto from './CardTexto';
import Habilidades from './Habilidades';

function FichaHabilidades() {
    const [traçosDePersonalidades, setTraçosDePersonalidades] = useState('');
    const [ideais, setIdeais] = useState('');
    const [vinculos, setVinculos] = useState('');
    const [fraquezas, setFraquezas] = useState('');

    return (
        <section className={styles.fichaHabilidades}>
            <CardTexto busca='tracoDePersonalidade' titulo='Traços De Personalidades' texto={traçosDePersonalidades} onChange={setTraçosDePersonalidades} />
            <CardTexto busca='ideais' titulo='Ideais' texto={ideais} onChange={setIdeais} />
            <CardTexto busca='vinculo' titulo='Vinculos' texto={vinculos} onChange={setVinculos} />
            <CardTexto busca='fraqueza' titulo='Fraquezas' texto={fraquezas} onChange={setFraquezas} />
            <Habilidades />
        </section>
    )
}

export default FichaHabilidades