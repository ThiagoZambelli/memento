import React from "react";
import styles from "./PrimeiraTela.module.scss";
import logo from "assets/img/LogoMemento.svg";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";

function PrimeiraTela() {
  const abrirModalLogin = useAbreModalLogin();

  return (
    <section className={styles.primeiraTela}>      
      <div
        className={`${styles.primeiraTela__container} ${styles.containerLogo}`}
      >
        <img
          className={styles.primeiraTela__container__logo}
          src={logo}
          alt="Logo do Memento"
        />
        <div className={styles.primeiraTela__container__pseudoLogo} />
        <div>
          <button onClick={() => abrirModalLogin()} className={styles.btn}>
            <i className={styles.btn__animation}></i>Logar<i className={styles.btn__animation}></i>
          </button>
        </div>      
      </div>
      <div className={styles.primeiraTela__container}>
        <div className={styles.primeiraTela__container__card}>
          <h2 className={styles.primeiraTela__container__titulo}>Memento</h2>
          <p className={styles.primeiraTela__container__texto}>
            Está pronto para embarcar em uma jornada inesquecível através do
            poder da imaginação?
          </p>
          <p className={styles.primeiraTela__container__texto}>
            Memento é sua aliada definitiva quando se trata de criar momentos
            épicos.
          </p>
          <p className={styles.primeiraTela__container__texto}>
            Nossa plataforma oferece um vasto conjunto de ferramentas projetadas
            para liberar sua criatividade e permitir que construa histórias
            incríveis, onde o único limite é sua imaginação. Com o Memento, você
            se torna o mestre da sua própria narrativa, moldando mundos e
            personagens como nunca antes.
          </p>          
        </div>
      </div>
    </section>
  );
}

export default PrimeiraTela;
