import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MenuPaginas.module.scss";

interface IMenuPaginasProps {
    links: link[],
}
interface link {
    to: string,
    legenda: string
}

function MenuPaginas({ links }: IMenuPaginasProps) {
    return (
        <nav className={styles.menuPaginas}>            
            {links.map(e => <div key={e.legenda}><Link to={e.to}>{e.legenda}</Link></div>)}
        </nav>
    )
}

export default MenuPaginas