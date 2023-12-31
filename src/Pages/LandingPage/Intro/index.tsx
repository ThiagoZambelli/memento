import React, { useEffect } from "react";
import styles from "./Intro.module.scss";
import Vagalumes from "../Components/Vagalumes";
import logo from "assets/img/LogoMemento.svg";
import IntroBtn from "./IntroBtn";

function Intro() {
  useEffect(() => {
    const handleScroll = () => {
      const myDiv = document.getElementById("myDiv");
      if (myDiv) {
        const scrollPosition = window.scrollY;
        const triggerPosition = 100;
        const opacity = 1 - Math.min(scrollPosition / triggerPosition, 1);
        const scale = 1 - Math.min(scrollPosition / triggerPosition, 1) * 0.5;
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
    <section className={styles.intro} id="myDiv">
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
          <p className={styles.intro__body__container__introDestaque}>
            Sua caixa de ferramentas para construir narrativas épicas!
          </p>
          <span className={styles.intro__body__container__intro}>
            Nossa plataforma oferece tudo o que é necessário para que o único
            limite para as suas mesas de RPG seja a sua criatividade!
          </span>
        </div>
      </div>
      <div className={styles.intro__footer}>
        <IntroBtn />
      </div>
    </section>
  );
}

export default Intro;
