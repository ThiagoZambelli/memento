import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarItens.module.scss";


function SideBarItens() {
	return (
		<section className={styles.itens}>
			<Link to={"/"}>Home</Link>
			<Link to={"/goblin-caolho"}>Goblin Caolho</Link>
			<Link to={"/forja-de-lendas"}>Forja de Lendas</Link>
		</section>
	);
}

export default SideBarItens;