import React from 'react'
import styles from './Loader.module.scss';

function Loader() {
  return (
    <section className={styles.loadin}>
        <div className={styles.loadin__spin}></div>
    </section>
  )
}

export default Loader