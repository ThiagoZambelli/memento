import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarItens.module.scss";
import useAtivaSideBar from "state/hooks/useAtivaSideBar";


function SideBarItens() {
	const fecha = useAtivaSideBar();
	const fechaMenu = () => {
		fecha();
	}
	return (
		<section className={styles.itens}>
			<Link onClick={fechaMenu} to={"/"}>Home</Link>
			<Link onClick={fechaMenu} to={"/goblin-caolho"}>Goblin Caolho</Link>
			<Link onClick={fechaMenu} to={"/forja-de-lendas"}>Forja de Lendas</Link>
		</section>
	);
}

export default SideBarItens;