import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MenuPaginas.module.scss";
import { GiTopaz } from "react-icons/gi";

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
            {links.map(e => <div key={e.legenda}><GiTopaz /><Link to={e.to}>{e.legenda}</Link><GiTopaz /></div>)}
        </nav>
    )
}

export default MenuPaginas