import React from "react";
import styles from "./SegundaTela.module.scss";
import logo from "assets/img/LogoForja.svg";
import CardLandingPage from "../Components/CardLandingPage";
import { BsCheck2All } from "react-icons/bs";
import BtnCard from "../Components/BtnCard";
import Vagalumes from "../Components/Vagalumes";

function SegundaTela() {
  return (
    <section className={styles.segundaTela}>
      <section className={styles.segundaTela__texto}>
        <div className={styles.segundaTela__texto__card}>
          <CardLandingPage
            segunda={
              <div>
                <ul>
                  <li>
                    <BsCheck2All />
                    Criação de perssonagens.
                  </li>
                  <li>
                    <BsCheck2All />
                    Manipulação de fichas.
                  </li>
                  <li>
                    <BsCheck2All />
                    Compartilhamento de Perssonagens.
                  </li>
                  <li>
                    <BsCheck2All />
                    Muito mais em breve...
                  </li>
                  <li>
                    <BtnCard caminho="/forja-de-lendas" />
                  </li>
                </ul>
              </div>
            }
            primeira={
              <p>
                A Forja de Lendas, uma ferramenta incrivel para que voce possa
                criar, organizar e gerir perssonagens para suas campanhas.
              </p>
            }
          />
        </div>
        <div className={styles.segundaTela__texto__logo}>
          <h3>Forja De Lendas</h3>
          <img
            className={styles.primeiraTela__container__logo}
            src={logo}
            alt="Logo do Memento"
          />
        </div>
      </section>
    </section>
  );
}

export default SegundaTela;
