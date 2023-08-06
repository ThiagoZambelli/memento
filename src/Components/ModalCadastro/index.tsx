import React, { useState } from 'react'
import styles from "./ModalCadastro.module.scss";
import { LzBotao, LzInput } from 'lithtlez-ds';

function ModalCadastro() {
    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confSenha, setConfSenha] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const cadastrar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className={styles.modalCadastro} onSubmit={cadastrar}>
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Nome" value={nome} onChange={setNome} />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Email" value={email} onChange={setEmail} type='email' />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Senha" value={senha} onChange={setSenha} type='password' />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Confirmar Senha" value={confSenha} onChange={setConfSenha} type='password' />
            <LzBotao corSecundaria="#c6ac8fff" corPrimaria="#22333bff" forma="gota" tipo="secundario" >Cadastrar</LzBotao>
        </form>
    )
}

export default ModalCadastro