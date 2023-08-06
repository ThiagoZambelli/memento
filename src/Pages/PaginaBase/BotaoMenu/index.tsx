import React from "react";
import { TfiMenu } from "react-icons/tfi";
import styles from "./styles.module.scss";
import useAtivaSideBar from "state/hooks/useAtivaSideBar";
import useEstadoSideBar from "state/hooks/useEstadoSideBar";


function BotaoMenu() {
	const abreFecha = useAtivaSideBar();
	const etsadoSideBar = useEstadoSideBar();	

	return (
		<TfiMenu onClick={abreFecha} className={`${styles.svg} ${etsadoSideBar ? styles.semBotao :styles.comBotao }`} />
	);
}

export default BotaoMenu;