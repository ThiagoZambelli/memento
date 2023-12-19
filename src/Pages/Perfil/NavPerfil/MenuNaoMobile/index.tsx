import React from 'react'
import styles from './MenuNaoMobile.module.scss';

function MenuNaoMobile() {
  return (
    <div className={styles.menu}>
      <a href="#personagens">Personagens</a>
      <a href="#contosFavoritos">Contos Favoritos</a>
    </div>
  )
}

export default MenuNaoMobile