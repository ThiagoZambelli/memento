import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ForjaComum.module.scss';
import forja from "../assets/forja.svg";
import MenuPaginas from 'Components/MenuPaginas';

const bannerForja = {
    backgroundImage: `url('${forja}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200px',
    boxShadow: '0 0 9px black', // Ajuste a altura conforme necessário
};

const links = [
    { to: '/forja-de-lendas/', legenda: 'Home' },
    { to: '/forja-de-lendas/personagens', legenda: 'Personagens' },
    { to: '/forja-de-lendas/forja', legenda: 'Forja' },
];

function ForjaComum() {
    return (
        <div className={styles.forjaComum}>
            <section style={bannerForja} />
            <MenuPaginas links={links} />
            <Outlet />
        </div >

    )
}

export default ForjaComum