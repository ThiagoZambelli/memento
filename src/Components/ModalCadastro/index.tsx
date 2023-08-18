import React, { useState } from 'react'
import styles from "./ModalCadastro.module.scss";
import { LzBotao, LzInput } from 'lithtlez-ds';
import { postUser } from 'Services/usuario';

function ModalCadastro() {
    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confSenha, setConfSenha] = useState<string>("");
    const [email, setEmail] = useState<string>("");


    const cadastrar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let novoUser = {
            nome:nome,
            email: email,
            senha:senha
        }
        setNome("");
        setSenha("");
        setConfSenha("");
        setEmail("");
        const resposta = await postUser(novoUser);
        console.log(resposta);
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