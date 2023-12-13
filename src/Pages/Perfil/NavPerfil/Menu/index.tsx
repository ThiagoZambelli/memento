import React, { useState } from 'react'
import styles from './Menu.module.scss';
import { useMediaQuery } from 'react-responsive';

function Menu() {
    const [ abaAtual, setAbaAtual] = useState<string>('')
    const telaMobile = useMediaQuery({ query: "(max-width: 780px)" });

  return (
    <nav className={styles.menu}>
        <ul className={`${styles.menu__lista} ${telaMobile ? styles.menu__lista__mobile : ''}`}>
            <li className={styles.menu__lista__item}><button className={`${styles.menu__lista__item__btn} ${abaAtual === "infos" ? styles.menu__lista__item__btn__ativo : ''}`} onClick={()=>setAbaAtual('infos')}>Infos</button></li>
            <li className={styles.menu__lista__item}><button className={`${styles.menu__lista__item__btn} ${abaAtual === "personagens" ? styles.menu__lista__item__btn__ativo : ''}`} onClick={()=>setAbaAtual('personagens')}>Personagens</button></li>
            <li className={styles.menu__lista__item}><button className={`${styles.menu__lista__item__btn} ${abaAtual === "contos" ? styles.menu__lista__item__btn__ativo : ''}`} onClick={()=>setAbaAtual('contos')}>Contos Favoritos</button></li>
        </ul>
    </nav>
  )
}

export default Menu