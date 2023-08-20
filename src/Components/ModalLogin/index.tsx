import React, { useState } from "react";
import styles from "./ModalLogin.module.scss";
import { LzInput, LzBotao } from "lithtlez-ds";
import { login } from "Services/login";
import useLogar from "state/hooks/useLogar";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import Loader from "Components/Loader";
import useSetUserLogado from "state/hooks/useSetUserLogado";

function ModalLogin() {
	const [senha, setSenha] = useState("");
	const [email, setEmail] = useState("");
	const [carregando, setCarregando] = useState(false);
	const logarSite = useLogar();
	const fechar = useAbreModalLogin();
	const setNome = useSetUserLogado();



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
			fechar();
		} else{
			setSenha("");
			setCarregando(false);
		}
		
	};

	return (
		<form className={styles.modalLogin} onSubmit={logar}>
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Email" value={email} onChange={setEmail} type="email" />
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Senha" value={senha} onChange={setSenha} type="password" />
			{!carregando ? <LzBotao corSecundaria="#c6ac8fff" corPrimaria="#22333bff" forma="gota" tipo="secundario" >Logar</LzBotao> : <Loader />}
		</form>
	);
}

export default ModalLogin;