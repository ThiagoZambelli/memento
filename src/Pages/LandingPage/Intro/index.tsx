import React, { useEffect } from "react";
import styles from "./Intro.module.scss";
import Vagalumes from "../Components/Vagalumes";
import logo from "assets/img/LogoMemento.svg";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";

function Intro() {
  const abrirModalLogin = useAbreModalLogin();
  useEffect(() => {
    const handleScroll = () => {
      const myDiv = document.getElementById("myDiv");

      if (myDiv) {
        const scrollPosition = window.scrollY;
        const triggerPosition = 100;
        const opacity = 1 - Math.min(scrollPosition / triggerPosition, 1);
        const scale = 1 - Math.min(scrollPosition / triggerPosition, 1) * .5;
        const translateX = -Math.min(scrollPosition / triggerPosition, 1) * 400;
        myDiv.style.opacity = opacity.toString();
        myDiv.style.transform = `scale(${scale}) translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="myDiv" className={styles.intro}>
      {[...Array(20)].map((_, index) => (
        <Vagalumes key={index} />
      ))}
      <div className={styles.intro__body}>
        <div className={styles.intro__body__container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo Memento" />
          </div>
          <div className={styles.logoTxt}>
            <p>Memento</p>
          </div>
        </div>
        <div className={styles.intro__body__container}>
          <p className={styles.intro__body__container__intro}>
            Sua caixa de ferramentas para construir narrativas épicas!
          </p>
          <p className={styles.intro__body__container__intro}>
            Nossa plataforma oferece tudo o que é necessário para que o único
            limite para as suas mesas de RPG seja a sua criatividade!
          </p>
        </div>
      </div>
      <div className={styles.intro__footer}>
        <button onClick={() => abrirModalLogin()} className={styles.btnLogar}>
          Logar!
        </button>
      </div>
    </section>
  );
}

export default Intro;
