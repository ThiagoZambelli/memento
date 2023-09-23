import React from "react";
import styles from "./GoblinCaolho.module.scss";
import PaginaErro from "Pages/PaginaErro";

function GoblinCaolho() {
	return (
		<section key={"goblinCaolho"} className={styles.goblinCaolho}>
			<PaginaErro />
		</section>
	);
}

export default GoblinCaolho;