import React from 'react'
import styles from './AtualizaAtributo.module.scss';
import usePegaModificador from '../hook/usePegaModficador';


interface IAtributoProp {
    nome: string,
    value: number,
    onChange: (value: number) => void
}

function AtualizaAtributo({ onChange, nome, value }: IAtributoProp) {
    const modificador = usePegaModificador();
    return (
        <div key={nome} className={styles.atributo}>
            <p>{nome}</p>
            <input inputMode={'numeric'} maxLength={2} value={value} type="number" onChange={(e) => onChange(parseInt(e.target.value, 10))}/>
            <span>{modificador(value)}</span>
        </div>
    )
}

export default AtualizaAtributo