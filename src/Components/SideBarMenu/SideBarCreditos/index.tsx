import React from "react";
import { Link } from "react-router-dom";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import styles from "./SideBarCredito.module.scss";

function SideBarCreditos() {
	return (
		<section className={styles.sideBarCredito}>
			<Link to={"https://github.com/ThiagoZambelli"}><AiFillGithub /></Link>
			<Link to={"https://www.linkedin.com/in/thiagozambelli"}><AiFillLinkedin /></Link>
            
		</section>
	);
}

export default SideBarCreditos;