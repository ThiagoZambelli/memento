import React from 'react'
import styles from './Atributo.module.scss';
import usePegaModificador from '../hook/usePegaModficador';


interface IAtributoProp {
    nome: string,
    valor: number
}

function Atributo({ nome, valor }: IAtributoProp) {
    const modificador = usePegaModificador();
    return (
        <div key={nome} className={styles.atributo}>
            <p>{nome}</p>
            <h3>{valor}</h3>
            <span>{modificador(valor)}</span>
        </div>
    )
}

export default Atributo