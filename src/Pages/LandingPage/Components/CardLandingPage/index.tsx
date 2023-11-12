import React, { ReactElement } from "react";
import styles from "./CardLandingPage.module.scss";

interface CardLandingPageProps {
  primeira: ReactElement;
  segunda: ReactElement;
}

function CardLandingPage({ primeira, segunda }: CardLandingPageProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__primeiro}>{primeira}</div>
      <div className={styles.card__segundo}>{segunda}</div>
    </div>
  );
}

export default CardLandingPage;
