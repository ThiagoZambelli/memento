import React, { FormEvent, useEffect, useState } from "react";
import styles from "./ModalCadastro.module.scss";
import { LzInput } from "lithtlez-ds";
import useAbreModalCadastro from "state/hooks/useAbreModalCadastro";
import Loader from "Components/Loader";
import BtnComum from "Components/BtnComum";
import useCadastro from "./hooks/useCadastro";

function ModalCadastro() {
  const [nome, setNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confSenha, setConfSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const fechar = useAbreModalCadastro();
  const { cadastra, att, loading, message, fecha } = useCadastro();

  useEffect(() => {
    if (message !== "") {
      alert(message);
      setSenha("");
      setConfSenha("");
    }
  }, [att, message]);

  useEffect(() => {
    if (fecha > 1) {
      setNome("");
      setEmail("");
      setSenha("");
      setConfSenha("");
      fechar();
    }
  }, [fecha]);

  const cadastrar = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await cadastra({ senha, confSenha, email, nome });
  };

  return (
    <form className={styles.modalCadastro} onSubmit={cadastrar}>
      <LzInput
        corBg="#c4c1d3"
        corSecundaria="#d8d8e6"
        corPrimaria="#480e30"
        label="Nome"
        value={nome}
        onChange={setNome}
      />
      <LzInput
        corBg="#c4c1d3"
        corSecundaria="#d8d8e6"
        corPrimaria="#480e30"
        label="Email"
        value={email}
        onChange={setEmail}
        type="email"
      />
      <LzInput
        corBg="#c4c1d3"
        corSecundaria="#d8d8e6"
        corPrimaria="#480e30"
        label="Senha"
        value={senha}
        onChange={setSenha}
        type="password"
      />
      <LzInput
        corBg="#c4c1d3"
        corSecundaria="#d8d8e6"
        corPrimaria="#480e30"
        label="Confirmar Senha"
        value={confSenha}
        onChange={setConfSenha}
        type="password"
      />
      <div className={styles.modalCadastro__containerbtn}>
        {loading ? <Loader /> : <BtnComum>Cadastrar</BtnComum>}
      </div>
    </form>
  );
}

export default ModalCadastro;
