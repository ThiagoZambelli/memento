import React, { useState } from 'react'
import usePegaModificador from '../../../hook/usePegaModficador';
import styles from './Pericia.module.scss';
import { AiOutlineCheck } from 'react-icons/ai'

interface IPericiaProps {
    atributo: number,
    nome: string
}
function Pericia({ nome, atributo }: IPericiaProps) {
    const [check, setCheck] = useState(false)
    const modificador = usePegaModificador();

    const clicar = () => {
        setCheck(!check);
    }
    return (
        <div className={styles.pericia}>
            <div onClick={clicar}>{check && <AiOutlineCheck />}</div>
            <span>{check ? modificador(atributo) + 2 : modificador(atributo)}</span>
            <p>{nome}</p>
        </div>
    )
}

export default Pericia