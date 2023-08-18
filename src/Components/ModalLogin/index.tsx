import React, { useState } from "react";
import styles from "./ModalLogin.module.scss";
import { LzInput, LzBotao } from "lithtlez-ds";
import { login } from "Services/login";
import useLogar from "state/hooks/useLogar";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";

function ModalLogin() {
	const [senha, setSenha] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const logarSite = useLogar();
	const fechar = useAbreModalLogin();



	const logar = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const teste = await login({ email, senha });
		if (teste !== undefined) {
			logarSite();
			setSenha("");
			setEmail("");
			fechar();
		}
	};

	return (
		<form className={styles.modalLogin} onSubmit={logar}>
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Email" value={email} onChange={setEmail} type="email" />
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Senha" value={senha} onChange={setSenha} type="password" />
			<LzBotao corSecundaria="#c6ac8fff" corPrimaria="#22333bff" forma="gota" tipo="secundario" >Logar</LzBotao>
		</form>
	);
}

export default ModalLogin;