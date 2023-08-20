import React, { useState } from 'react'
import styles from './Habilidade.module.scss';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';

interface HabilidadeProps {
    nome: string,
    descricao: string
}
function Habilidade({ nome, descricao }: HabilidadeProps) {
    const [aberto, setAberto] = useState<boolean>(false)
    return (
        <div onClick={() => setAberto(!aberto)} className={styles.habilidade}>
            <h2>{nome} {aberto ? <BsArrowUpSquareFill /> : <BsArrowDownSquareFill />}</h2>
            {aberto ? <p>{descricao}</p> : ''}
        </div>
    )
}

export default Habilidade