import React from 'react'
import IBannerItem from '../../interface/IBannerItem'
import styles from './BannerItem.module.scss';
import Habilidade from './Habilidade';
import InfosClasse from './InfosClasse';



function BannerItem({ ...elemento }: IBannerItem) {
    return (
        <section key={elemento._id} className={styles.bannerItem}>
            <h3 className={styles.bannerItem__titulo}>{elemento.nome}</h3>
            <p className={styles.bannerItem__descricao}>{elemento.descricao}</p>
            {elemento.tipo === 'classe' && <InfosClasse {...elemento} />}
            {elemento.habilidades ? elemento.habilidades.map(e => <Habilidade {...e} />) : ''}
        </section>
    )
}

export default BannerItem