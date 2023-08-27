import React from "react";
import styles from "./Home.module.scss";
import News from "./News";

function Home() {
	return (
		<section className={styles.home}>           
			<News />
		</section>
	);
}

export default Home;