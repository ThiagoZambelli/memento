import React, { useState } from "react";
import styles from "./ModalLogin.module.scss";
import { LzInput, LzBotao } from "lithtlez-ds";
import { login } from "Services/login";
import useLogar from "state/hooks/useLogar";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import Loader from "Components/Loader";
import useSetUserLogado from "state/hooks/useSetUserLogado";
import { useNavigate } from "react-router-dom";
import BtnComum from "Components/BtnComum";
import useAbreModalCadastro from "state/hooks/useAbreModalCadastro";
import useSetIdUserLogado from "state/hooks/useSetIdUserLogado";

function ModalLogin() {
	const [senha, setSenha] = useState("");
	const [email, setEmail] = useState("");
	const [carregando, setCarregando] = useState(false);
	const logarSite = useLogar();
	const fechar = useAbreModalLogin();
	const setNome = useSetUserLogado();
	const setId = useSetIdUserLogado();
	const ir = useNavigate();
	const abrirModalCadastro = useAbreModalCadastro();
	const abreModalLogin = useAbreModalLogin();

	const abreCadastro = () => {
		abrirModalCadastro();
		abreModalLogin();
	}


	const logar = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setCarregando(true);
		const response = await login({ email, senha });
		if (response) {
			logarSite();
			setSenha("");
			setEmail("");
			setNome(response.nome);
			setId(response.id)
			setCarregando(false);
			ir("/")
			fechar();
		} else {
			setSenha("");
			setCarregando(false);
		}

	};

	return (
		<form className={styles.modalLogin} onSubmit={logar}>
			<LzInput corBg='#c4c1d3' corSecundaria="#d8d8e6" corPrimaria="#480e30" label="Email" value={email} onChange={setEmail} type="email" />
			<LzInput corBg='#c4c1d3' corSecundaria="#d8d8e6" corPrimaria="#480e30" label="Senha" value={senha} onChange={setSenha} type="password" />
			<div className={styles.modalLogin__containerbtn}>
				{!carregando ? <BtnComum >Logar</BtnComum> : <Loader />}
			</div>
			<div>
				<h3 onClick={abreCadastro}>Ainda não tem uma conta?</h3>
			</div>
		</form>
	);
}

export default ModalLogin;