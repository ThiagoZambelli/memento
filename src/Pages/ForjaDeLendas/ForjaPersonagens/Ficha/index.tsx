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
import FichaVida from './FichaVida';
import BtnComum from 'Components/BtnComum';
import { deletPersonagem } from 'Services/personagem';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function Ficha() {
    const fichaEscolhida = useRecoilValue(ficha);
    const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
    const [mostraCaracteristicas, setMostraCaracteristicas] = useState(false);
    const [deletando, setDeletando] = useState(false);
    const ir = useNavigate();

    const deletar = async () => {
        try {
            await deletPersonagem(fichaEscolhida._id);
            setDeletando(false);
            ir(-1);
        }
        catch (err) {
            console.log(err)
            setDeletando(false)
        }
    }

    return (
        fichaEscolhida._id !== ''
            ? <section className={styles.paginaFicha}>
                <div className={`${styles.paginaFicha__modal} ${deletando ? styles.paginaFicha__modal__aberto : styles.paginaFicha__modal__fechado}`}>
                    <div className={styles.paginaFicha__modal__body}>
                        <p>Deseja deletar o personagem?</p>
                        <div>
                            <BtnComum onClick={deletar}>Sim</BtnComum>
                            <BtnComum onClick={() => setDeletando(false)}>Nâo</BtnComum>
                        </div>
                    </div>
                </div>                
                <section className={styles.paginaFicha__ficha}>
                    <FichaHeader {...fichaEscolhida} />
                    <FichaVida  {...fichaEscolhida} />
                    {isMobile && <MenuMobile valor={mostraCaracteristicas} mudaEstado={setMostraCaracteristicas} />}
                    <div className={styles.paginaFicha__ficha__body}>
                        <div className={`${isMobile && mostraCaracteristicas && styles.someDaTela}`} key={'valores'}><FichaAtributos _id={fichaEscolhida._id} atributos={fichaEscolhida.atributos} /></div>
                        <div className={`${isMobile && !mostraCaracteristicas && styles.someDaTela}`} key={'caracteristicas'}><FichaHabilidades /></div>
                        <div></div>
                    </div>
                </section>
                <div className={styles.paginaFicha__btnDeleta}>
                    <BtnComum onClick={() => setDeletando(true)}><RiDeleteBinFill /> Deletar Personagem</BtnComum>
                </div>
            </section>
            : <PaginaErro />
    )
}

export default Ficha