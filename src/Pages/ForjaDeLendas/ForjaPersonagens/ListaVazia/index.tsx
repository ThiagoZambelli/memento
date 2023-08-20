import React from 'react'
import styles from './ListaVazia.module.scss';

function ListaVazia() {
  return (
    <div className={styles.vazia}>
        <p>Você ainda não iniciou uma história, vamos Forjar uma Lenda!</p>
    </div>
  )
}

export default ListaVazia