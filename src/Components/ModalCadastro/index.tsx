import React, { useState } from 'react'
import styles from "./ModalCadastro.module.scss";
import { LzBotao, LzInput } from 'lithtlez-ds';
import { postUser } from 'Services/usuario';
import useValidaUsuario from 'state/hooks/useValidaUsuario';
import useAbreModalCadastro from 'state/hooks/useAbreModalCadastro';
import Loader from 'Components/Loader';

function ModalCadastro() {
    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [confSenha, setConfSenha] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [carregando, setCarregando] = useState(false);
    const fechar = useAbreModalCadastro();


    const validacao = useValidaUsuario();

    const cadastrar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCarregando(true);
        let novoUser = {
            nome: nome,
            email: email,
            senha: senha,
            confSenha: confSenha
        }
        const usuarioValidado = validacao(novoUser)
        if (usuarioValidado) {
            const resposta = await postUser(usuarioValidado);
            if (resposta?.status === 201) {
                setNome("");
                setSenha("");
                setConfSenha("");
                setEmail("");
                alert(resposta.data.menssage);
                setCarregando(false);
                fechar();
            } else {
                setNome("");
                setSenha("");
                setConfSenha("");
                setEmail("");
                alert(resposta?.data.menssage);
                setCarregando(false);
            }
        } else {
            alert("Problema com os dados fornecidos");
            setCarregando(false);
        }

    };

    return (
        <form className={styles.modalCadastro} onSubmit={cadastrar}>
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Nome" value={nome} onChange={setNome} />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Email" value={email} onChange={setEmail} type='email' />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Senha" value={senha} onChange={setSenha} type='password' />
            <LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Confirmar Senha" value={confSenha} onChange={setConfSenha} type='password' />
            <div className={styles.modalCadastro__containerbtn}>
                {!carregando ? <LzBotao corSecundaria="#eae0d5ff" corPrimaria="#5e503fff" corHover="#22333bff">Cadastrar</LzBotao> : <Loader />}
            </div>
        </form>
    )
}

export default ModalCadastro