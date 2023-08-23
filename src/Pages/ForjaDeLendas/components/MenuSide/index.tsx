import React,{useEffect} from 'react'
import ItemMenu from './ItemMenu'
import styles from './MenuSelecao.module.scss';

import IBannerItem from '../../interface/IBannerItem';
import useSetBannerMostrado from 'Pages/ForjaDeLendas/state/hooks/useSetBannerMostrado';


interface MenuDeSelecaoProps {
    Opcoes: IBannerItem[];
}

function MenuSide({Opcoes}: MenuDeSelecaoProps) {
    const setBanner = useSetBannerMostrado();

    useEffect(()=>{
        setBanner(Opcoes[0])
    },[])

    return (
        <section className={styles.menu}>
            {Opcoes.map(e => (
                <ItemMenu onClick={() => setBanner(e)} key={e.nome} nome={e.nome} />
            ))}
        </section>
    )
}

export default MenuSide