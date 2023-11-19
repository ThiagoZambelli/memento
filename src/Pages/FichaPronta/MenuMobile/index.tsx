import React from 'react'
import styles from './MenuMobile.module.scss';

interface IMenuMobileProp {
    mudaEstado: (valor: boolean) => void,
    valor: boolean
}
function MenuMobile({ mudaEstado, valor }: IMenuMobileProp) {
    const setValor = (estado: boolean) => {
        mudaEstado(estado)
    }
    
    return (
        <nav className={styles.menuMobile}>
            <ul className={styles.menuMobile__lista}>
                <li onClick={() => setValor(false)} className={styles.menuMobile__lista__elemento}><button className={`${!valor ? styles.selecionado : styles.naoSelecionado}`}>Habilidades</button></li>
                <li onClick={() => setValor(true)} className={styles.menuMobile__lista__elemento}><button className={`${valor ? styles.selecionado : styles.naoSelecionado}`}>Caracteristicas</button></li>
            </ul>
        </nav>
    )
}

export default MenuMobile