import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "./PaginaBase.module.scss";
import BotaoMenu from "./BotaoMenu";
import SideBarMenu from "Components/SideBarMenu";
import useEstadoModalLogin from "state/hooks/useEstadoModalLogin";
import useEstadoModalCadastro from "state/hooks/useEstadoModalCadastro";
import Modal from "Components/Modal";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import useAbreModalCadastro from "state/hooks/useAbreModalCadastro";
import ModalLogin from "Components/ModalLogin";
import ModalCadastro from "Components/ModalCadastro";

function PaginaBase() {
	const atomLogin = useEstadoModalLogin();
	const atomCadastro = useEstadoModalCadastro();
	const [login, setLogin] = useState<boolean>(false);
	const [cadastro, setCadastro] = useState<boolean>(false);
	const closeLogin = useAbreModalLogin();
	const closeCadastro = useAbreModalCadastro();

	useEffect(() => {
		setLogin(atomLogin);
	}, [atomLogin]);

	useEffect(() => {
		setCadastro(atomCadastro);
	}, [atomCadastro]);

	return (
		<section className={styles.paginaBase}>
			<Modal key={"cadastro"} closeModal={closeCadastro} aberto={cadastro} titulo="Cadastro" >{<ModalCadastro />}</Modal>
			<Modal key={"login"} closeModal={closeLogin}  aberto={login} titulo="Login" >{<ModalLogin />}</Modal>
			<BotaoMenu />
			<SideBarMenu />
			<Outlet />
		</section>
	);
}

export default PaginaBase;