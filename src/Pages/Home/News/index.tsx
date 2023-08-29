import React, { useState, useEffect } from 'react'
import styles from './News.module.scss';
import INew from '../interfaces/INews';
import { getNews } from 'Services/news';
import New from './New';
import { GiScrollUnfurled } from 'react-icons/gi';
import Loader from 'Components/Loader';

function News() {
    const [noticias, setNoticias] = useState<INew[]>();

    useEffect(() => {
        pegaNews();
    }, []);

    const pegaNews = async () => {
        setNoticias(await getNews());
    }


    return (
        <section className={styles.news}>
            <div className={styles.news__titulo}>
                <h2><GiScrollUnfurled />What's Rolling<GiScrollUnfurled /></h2>
            </div>
            <div className={styles.news__body}>
                {noticias && noticias?.length > 0 ? noticias?.map((e, i) => (<New key={i} {...e} />)) : <Loader />}
            </div>
        </section>
    )
}

export default News