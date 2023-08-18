import React, { useEffect, useState } from "react";
import styles from "./SideBarMenu.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import useEstadoSideBar from "state/hooks/useEstadoSideBar";
import useAtivaSideBar from "state/hooks/useAtivaSideBar";
import SideBarItens from "./SideBarItens";
import SideBarCreditos from "./SideBarCreditos";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import useAbreModalCadastro from "state/hooks/useAbreModalCadastro";
import {useRecoilValue } from "recoil";
import { logado } from "state/atom";
import useDeslogar from "state/hooks/useDeslogar";




function SideBarMenu() {
	const estadoSideBar = useEstadoSideBar();
	const abreFecha = useAtivaSideBar();
	const [valorSideBar, setValorSideBar] = useState<string>();
	const abrirModalLogin = useAbreModalLogin();
	const abrirModalCadastro = useAbreModalCadastro();
	const estadoLogado = useRecoilValue(logado);
	const deslogar = useDeslogar();	

	useEffect(() => {
		if (estadoSideBar) {
			setValorSideBar(styles.sideBarAtiva);
		} else {
			setValorSideBar(styles.sideBarDesativa);
		}
	}, [estadoSideBar]);
	return (
		<section className={`${styles.sideBar} ${valorSideBar}`}>
			<div className={styles.sideBar__header}>
				{!estadoLogado
					? <>
						<button onClick={abrirModalLogin}>Login</button>
						<button onClick={abrirModalCadastro}>Register</button>
					</> :
					<button onClick={deslogar}>Deslogar</button>}
				<AiOutlineClose onClick={abreFecha} />
			</div>
			<SideBarItens />
			<SideBarCreditos />
		</section>
	);
}

export default SideBarMenu;