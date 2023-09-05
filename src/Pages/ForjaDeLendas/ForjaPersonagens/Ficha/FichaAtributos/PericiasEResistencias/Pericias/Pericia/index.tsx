import React, { useState, useEffect } from 'react'
import usePegaModificador from '../../../hook/usePegaModficador';
import styles from './Pericia.module.scss';
import { AiOutlineCheck } from 'react-icons/ai'
import useComparaPericia from './hook/useComparaPericia';
import useSetaPericia from './hook/useSetaPericia';

interface IPericiaProps {
    atributo: number,
    nome: string
}
function Pericia({ nome, atributo }: IPericiaProps) {
    const [check, setCheck] = useState(false)
    const modificador = usePegaModificador();
    const verificar = useComparaPericia();
    const setar = useSetaPericia();

    useEffect(()=>{
        setCheck(verificar(nome))
    },[])
    const clicar = () => {
        setar(nome);
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