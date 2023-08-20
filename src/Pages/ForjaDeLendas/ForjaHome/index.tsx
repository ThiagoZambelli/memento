import React from 'react'
import styles from './ForjaHome.module.scss';
import imagem1 from "./assets/home1.svg";
import imagem2 from "./assets/home2.svg";




function ForjaHome() {
    const telaPequena = window.innerWidth <= 780;

    return (
        <section className={styles.forjaHome}>
            <div className={styles.forjaHome__container}>
                <img src={imagem1} alt="Esboço de perssonagem" />
                <div>
                    <h2>Bem-Vindo a Forja de Lendas.</h2>
                    <p>Aqui damos todas as ferramentas necessárias para auxiliar na sua grande história.</p>
                </div>
            </div>
            <div className={styles.forjaHome__container}>
                <img src={imagem2} alt="Esboço de perssonagem" className={`${!telaPequena && styles.invertido}`} />
                <div>
                    <h2>Quem Somos !</h2>
                    <p>Este projeto consiste em ser uma plataforma para jogadores de RPG. Temos a intenção de dar asas à sua imaginação, para que o limite de suas aventuras seja apenas sua criatividade!</p>
                </div>
            </div>
        </section>
    )
}

export default ForjaHome