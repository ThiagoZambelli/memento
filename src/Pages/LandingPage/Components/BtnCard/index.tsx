import React from "react";
import styles from "./BtnCard.module.scss";
import { useNavigate } from "react-router-dom";

interface BtnProps {
  caminho: string;
}

function BtnCard({ caminho }: BtnProps) {
  const ir = useNavigate();
  return (
    <button onClick={() => ir(caminho)} className={styles.cta}>
      <span>Bora testar ...</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}

export default BtnCard;
