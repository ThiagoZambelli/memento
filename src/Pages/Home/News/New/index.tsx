import React from 'react'
import styles from './New.module.scss';
import { BiRightArrow } from 'react-icons/bi'
import { GiTiedScroll } from 'react-icons/gi'


interface NewProps {
    titulo: string,
    paragrafos: string[],
    alerta?: boolean,
    data: string
}


function New({ titulo, paragrafos, alerta }: NewProps) {
    return (
        <div className={styles.newContainer}>
            <span><GiTiedScroll />New</span>
            <section className={styles.new}>
                <h3 className={`${styles.new__titulo} ${alerta && styles.alerta}`}>{titulo}</h3>
                {paragrafos.map((e, i) => (<p key={i}><BiRightArrow />{e}</p>))}
            </section>
        </div>
    )
}

export default New