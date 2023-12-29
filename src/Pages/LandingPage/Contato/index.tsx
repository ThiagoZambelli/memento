import React, { useState } from "react";
import styles from "./Contato.module.scss";
import useOpiniaoService from "Services/useOpiniaoService";

function Contato() {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [email, setEmail] = useState("");
  const {enviar,loading} = useOpiniaoService();

  const enviarBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enviar(nome, email, texto);
    resetar();
  };
  const resetar = () => {
    setNome("");
    setTexto("");
    setEmail("");
  };

  return (
    <section className={styles.contato}>
      <div className={styles.contato__header}>
        <h3>Nos deixe sua opinião</h3>
        <p>
          Descreva sua experiência na plataforma ou aponte algo que poderíamos
          melhorar. Estamos muito animados em ler sua opinião.
        </p>
      </div>
      <form className={styles.contato__form} onSubmit={(e) => enviarBtn(e)}>
        <div className={styles.inputbox}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            required={true}
          />
          <span>Nome</span>
          <i></i>
        </div>
        <div className={styles.inputbox}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required={true}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles.textareaDiv}>
          <label>Sua Opinião</label>
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className={styles.textareaDiv__textarea}
            required={true}
          />
          <i></i>
        </div>
        <div className={styles.contato__btns}>
          <button disabled={loading} className={styles.contato__btns__enviar}>Enviar</button>
          <button disabled={loading}  onClick={() => resetar()} className={styles.contato__btns__resetar}>Resetar</button>
        </div>
      </form>
    </section>
  );
}

export default Contato;
