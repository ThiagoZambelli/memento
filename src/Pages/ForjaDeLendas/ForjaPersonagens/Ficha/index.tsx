import { ficha } from 'Pages/ForjaDeLendas/state/atom'
import PaginaErro from 'Pages/PaginaErro';
import React from 'react'
import { useRecoilValue } from 'recoil'
import styles from './Ficha.module.scss';
import FichaHeader from './FichaHeader';

function Ficha() {
    const fichaEscolhida = useRecoilValue(ficha);
    return (
        fichaEscolhida._id !== ''
            ? <section className={styles.paginaFicha}>
                <section className={styles.paginaFicha__ficha}>
                    <FichaHeader {...fichaEscolhida} />
                    <div className={styles.paginaFicha__ficha__body}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </section>
            : <PaginaErro />
    )
}

export default Ficha