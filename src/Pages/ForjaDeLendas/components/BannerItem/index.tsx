import React from 'react'
import IBannerItem from '../../interface/IBannerItem'
import styles from './BannerItem.module.scss';
import Habilidade from './Habilidade';



function BannerItem({ nome, descricao, habilidades }: IBannerItem) {
    return (
        <section key={descricao} className={styles.bannerItem}>
            <h3 className={styles.bannerItem__titulo}>{nome}</h3>
            <p className={styles.bannerItem__descricao}>{descricao}</p>
            {habilidades ? habilidades.map(e => <Habilidade {...e} />) : ''}
        </section>
    )
}

export default BannerItem