import React from "react";
import styles from "./TerceiraTela.module.scss";
import logo from "assets/img/LogoBardo.svg";
import CardLandingPage from "../Components/CardLandingPage";
import { BsCheck2All } from "react-icons/bs";
import BtnCard from "../Components/BtnCard";

function TerceiraTela() {
  return (
    <section className={styles.terceiraTela}>
      <section className={styles.terceiraTela__texto}>
        <div className={styles.terceiraTela__texto__logo}>
          <h3>Contos do Bardo</h3>
          <img
            className={styles.terceiraTela__container__logo}
            src={logo}
            alt="Logo dos Contos"
          />
        </div>
        <div className={styles.terceiraTela__texto__card}>
          <CardLandingPage
            segunda={
              <div>
                <ul>
                  <li>
                    <BsCheck2All />
                    Biblioteca de histórias.
                  </li>
                  <li>
                    <BsCheck2All />
                    Local de leitura.
                  </li>
                  <li>
                    <BsCheck2All />
                    Compartilhamento de ideias.
                  </li>
                  <li>
                    <BsCheck2All />
                    Muito mais em breve...
                  </li>
                  <li>
                    <BtnCard caminho="/contos-do-bardo" />
                  </li>
                </ul>
              </div>
            }
            primeira={
              <p>
                Os Contos do Bardo, é um local onde você pode compartilhar
                ideias de campanhas e encontrar novas inspirações.
              </p>
            }
          />
        </div>
      </section>
    </section>
  );
}

export default TerceiraTela;
