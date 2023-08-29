import React from 'react'
import styles from './Carregamento.module.scss';


function Carregamento() {
    return (
        <section className={styles.container}>
            <div className={styles.container__loader}>
                <span className={styles.container__loader__1} ></span>
                <span className={styles.container__loader__2} ></span>
                <span className={styles.container__loader__3} ></span>
                <span className={styles.container__loader__4} ></span>
                <span className={styles.container__loader__5} ></span>
                <span className={styles.container__loader__6} ></span>
                <span className={styles.container__loader__7} ></span>
                <span className={styles.container__loader__8} ></span>
                <span className={styles.container__loader__9} ></span>
                <span className={styles.container__loader__10} ></span>
                <span className={styles.container__loader__11} ></span>
                <span className={styles.container__loader__12} ></span>
            </div>
            <h3><b>Carregando...</b></h3>
        </section>
    )
}

export default Carregamento