import React, { useState } from 'react'
import styles from "./ModalCadastro.module.scss";
import { LzBotao, LzInput } from 'lithtlez-ds';
import { postUser } from 'Services/usuario';
import useValidaUsuario from 'state/hooks/useValidaUsuario';
import useAbreModalCadastro from 'state/hooks/useAbreModalCadastro';
import Loader from 'Components/Loader';
import BtnComum from 'Components/BtnComum';

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
            <LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Nome" value={nome} onChange={setNome} />
            <LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Email" value={email} onChange={setEmail} type='email' />
            <LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Senha" value={senha} onChange={setSenha} type='password' />
            <LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Confirmar Senha" value={confSenha} onChange={setConfSenha} type='password' />
            <div className={styles.modalCadastro__containerbtn}>
                {!carregando ? <BtnComum >Cadastrar</BtnComum> : <Loader />}
            </div>
        </form>
    )
}

export default ModalCadastro