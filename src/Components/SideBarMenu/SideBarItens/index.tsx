import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBarItens.module.scss";


function SideBarItens() {
	return (
		<section className={styles.itens}>
			<ul>
				<li><Link to={"/goblin-caolho"}>Goblin Caolho</Link></li>
				<li><Link to={"/forja-de-lendas"}>Forja de Lendas</Link></li>
			</ul>
		</section>
	);
}

export default SideBarItens;