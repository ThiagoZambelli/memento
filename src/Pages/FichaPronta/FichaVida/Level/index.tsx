import React from "react";
import styles from "./Level.module.scss";


interface ILevelProps {
  lvl: number  
}

function Level({  lvl }: ILevelProps) {

  return (
    <div className={styles.level}>
      <span className={styles.level__lvl}>{lvl}</span>
      <p>Level</p>
    </div>
  );
}

export default Level;
