import React, { useState } from "react";
import styles from "./ModalLogin.module.scss";
import { LzInput, LzBotao } from "lithtlez-ds";

function ModalLogin() {
	const [senha, setSenha] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const logar = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className={styles.modalLogin} onSubmit={logar}>
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Email" value={email} onChange={setEmail} />
			<LzInput corBg='#c6ac8fff' corSecundaria="#c6ac8fff" corPrimaria="#22333bff" label="Senha" value={senha} onChange={setSenha} />
			<LzBotao corSecundaria="#c6ac8fff" corPrimaria="#22333bff" forma="gota" tipo="secundario" >Logar</LzBotao>
		</form>
	);
}

export default ModalLogin;