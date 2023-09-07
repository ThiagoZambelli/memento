import { ficha } from 'Pages/ForjaDeLendas/state/atom'
import PaginaErro from 'Pages/PaginaErro';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import styles from './Ficha.module.scss';
import FichaHeader from './FichaHeader';
import FichaAtributos from './FichaAtributos';
import FichaHabilidades from './FichaHabilidades';
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile';

function Ficha() {
    const fichaEscolhida = useRecoilValue(ficha);
    const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
    const [mostraCaracteristicas, setMostraCaracteristicas] = useState(false);
    return (
        fichaEscolhida._id !== ''
            ? <section className={styles.paginaFicha}>
                <section className={styles.paginaFicha__ficha}>
                    <FichaHeader {...fichaEscolhida} />
                    {isMobile && <MenuMobile valor={mostraCaracteristicas} mudaEstado={setMostraCaracteristicas} />}
                    <div className={styles.paginaFicha__ficha__body}>
                        <div className={`${isMobile && mostraCaracteristicas && styles.someDaTela}`} key={'valores'}><FichaAtributos _id={fichaEscolhida._id} atributos={fichaEscolhida.atributos} /></div>
                        <div className={`${isMobile && !mostraCaracteristicas && styles.someDaTela}`} key={'caracteristicas'}><FichaHabilidades /></div>
                        <div></div>
                    </div>
                </section>
            </section>
            : <PaginaErro />
    )
}

export default Ficha