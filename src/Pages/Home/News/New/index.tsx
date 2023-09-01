import React from 'react'
import styles from './New.module.scss';
import { BiRightArrow } from 'react-icons/bi'
import { GiTiedScroll } from 'react-icons/gi'


interface NewProps {
    titulo: string,
    paragrafos: string[],
    alerta?: boolean,
    createdAt?: string
}


function New({ createdAt, titulo, paragrafos, alerta }: NewProps) {
    const dataNew = new Date(createdAt!);
    const dia = String(dataNew.getDate()).padStart(2, '0');
    const mes = String(dataNew.getMonth() + 1).padStart(2, '0'); // Lembre-se que os meses são indexados de 0 a 11
    const ano = dataNew.getFullYear();

    return (
        <div className={styles.newContainer}>
            <span><GiTiedScroll />New</span>
            <section className={styles.new}>
                <div className={styles.new__date}>{`${dia}/${mes}/${ano}`}</div>
                <h3 className={`${styles.new__titulo} ${alerta && styles.alerta}`}>{titulo}</h3>
                {paragrafos.map((e, i) => (<p key={i}><BiRightArrow />{e}</p>))}
            </section>
        </div>
    )
}

export default New