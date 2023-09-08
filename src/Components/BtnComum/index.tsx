import React, { ReactNode } from 'react'
import styles from "./BtnComum.module.scss";

interface BtnProps {
  children: ReactNode;
  disabled?: boolean,
  onClick?: () => void
}

function BtnComum({onClick, children, disabled }: BtnProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.btn} >
      {children}
    </button>
  )
}

export default BtnComum