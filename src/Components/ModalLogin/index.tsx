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

function ModalLogin() {
	const [senha, setSenha] = useState("");
	const [email, setEmail] = useState("");
	const [carregando, setCarregando] = useState(false);
	const logarSite = useLogar();
	const fechar = useAbreModalLogin();
	const setNome = useSetUserLogado();
	const ir = useNavigate();



	const logar = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setCarregando(true);
		const response = await login({ email, senha });
		if (response) {
			logarSite();
			setSenha("");
			setEmail("");
			setNome(response);
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
			<LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Email" value={email} onChange={setEmail} type="email" />
			<LzInput corBg='#EFE4BF' corSecundaria="#EFE4BF" corPrimaria="#6A473C" label="Senha" value={senha} onChange={setSenha} type="password" />
			<div className={styles.modalLogin__containerbtn}>
				{!carregando ? <BtnComum >Logar</BtnComum> : <Loader />}
			</div>
		</form>
	);
}

export default ModalLogin;