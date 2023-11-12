import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillCopyrightCircle } from "react-icons/ai";
import logo from "assets/img/mementoLogoFooter.svg";
import styles from "./Footer.module.scss";

function Footer() {

  const ir = useNavigate();

  return (
    <footer className={styles.footer}>
      <img onClick={() => ir('/')} className={styles.footer__logo} src={logo} alt="Logo Memento" />
      <section className={styles.footer__top}>
        <div className={styles.footer__top__coluna}>
          <h2>Todas as Ferramentas</h2>
          <Link to={"/forja-de-lendas"}>Forja de Lendas</Link>
          <Link to={"/contos-do-bardo"}>Contos do Bardo</Link>
          <Link to={"/news"}>News</Link>
        </div>
        <div className={styles.footer__top__coluna}>
          <h2>Contatos</h2>
          <p>Entre em contato e me deu sua opinião!</p>
          <div>
            <Link to={"https://www.linkedin.com/in/thiagozambelli"}>
              <AiFillLinkedin />
            </Link>
            <Link to={"https://github.com/ThiagoZambelli"}>
              <AiFillGithub />
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.footer__copy}>
        <p><AiFillCopyrightCircle />2023 All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
