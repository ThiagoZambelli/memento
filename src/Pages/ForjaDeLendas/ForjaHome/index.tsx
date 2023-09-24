import React from 'react'
import styles from './ForjaHome.module.scss';
import imagem1 from "./assets/home1.svg";
import imagem2 from "./assets/home2.svg";




function ForjaHome() {
    const telaPequena = window.innerWidth <= 780;

    return (
        <section className={styles.forjaHome}>
            <div className={styles.forjaHome__container}>
                <img src={imagem1} alt="Esboço de perssonagem" className={`${telaPequena && styles.invertido}`}/>
                <div>
                    <h2>Bem-Vindo a Forja de Lendas.</h2>
                    <p>Aqui, queremos dar todas as ferramentas necessárias para ajudar em sua grande história.</p>
                </div>
            </div>
            <div className={styles.forjaHome__container}>
                <img src={imagem2} alt="Esboço de perssonagem" className={`${styles.invertido}`} />
                <div>
                    <h2>O que é a Forja ?</h2>
                    <p>A forja foi feita para tornar mais simples e dinâmica a criação e controle das fichas de personagens.</p>
                </div>
            </div>
        </section>
    )
}

export default ForjaHome