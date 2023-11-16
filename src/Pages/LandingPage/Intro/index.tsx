import React from "react";
import styles from "./Intro.module.scss";
import logo from "assets/img/LogoMemento.svg";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import Vagalumes from "../Components/Vagalumes";

function Intro() {
  const abrirModalLogin = useAbreModalLogin();
  return (
    <section className={styles.intro}>
      {[...Array(20)].map((_, index) => (
        <Vagalumes key={index} />
      ))}
      <div className={styles.intro__body}>
        <div className={styles.intro__body__container}>
          <div className={styles.intro__body__container__logo}>
            <img src={logo} alt="Logo Memento" />
          </div>
          <div className={styles.intro__body__container__titulo}>
            <h1>Memento</h1>
          </div>
        </div>
        <div className={styles.intro__body__container}>
          <div className={styles.intro__body__container__card}>
            <p className={styles.intro__body__container__descricao}>
              Memento é o seu aliado definitivo quando se trata de criar momentos
              épicos.
            </p>
            <p className={styles.intro__body__container__descricao}>
              Nossa plataforma oferece um vasto conjunto de ferramentas
              projetadas para liberar sua criatividade e permitir que construa
              histórias incríveis, onde o único limite é sua imaginação.
            </p>
            <p className={styles.intro__body__container__descricao}>
              Com o Memento, você se torna o mestre da sua própria narrativa,
              moldando mundos e personagens como nunca antes.
            </p>
          </div>
        </div>
      </div>
      <footer className={styles.intro__footer}>
        <button onClick={() => abrirModalLogin()} className={styles.btn}>
          <i className={styles.btn__animation}></i>Faça Login
          <i className={styles.btn__animation}></i>
        </button>
      </footer>
    </section>
  );
}

export default Intro;
