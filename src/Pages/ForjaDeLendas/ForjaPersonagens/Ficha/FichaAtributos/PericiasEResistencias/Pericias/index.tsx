import React, { useEffect, useState } from 'react'
import usePegaModificador from '../../hook/usePegaModficador';
import { useRecoilValue } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import styles from './Pericias.module.scss';

function Pericias() {
    const fichaEscolhida = useRecoilValue(ficha);
    const [atributos, setAtributos] = useState<number[]>();
    const modificador = usePegaModificador();

    useEffect(() => {
        setAtributos(fichaEscolhida.atributos || [10, 10, 10, 10, 10, 10])
    }, []);

    useEffect(() => {
        setAtributos(fichaEscolhida.atributos)
    }, [fichaEscolhida.atributos]);

    // Funciona na resistencia para saber se tem a proeficiencia ou não
    // const iguala = (resistencia: string) => {
    //     return resistencia === res1 || resistencia === res2
    // }

    return (
        atributos && atributos?.length > 0
            ? <section className={styles.periciasContainer}>
                <div className={styles.periciasContainer__body}>
                    {/* Modificador de Força */}
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[0])}</span><p>Atletismo</p></div>
                    {/* Modificador de Destreza */}
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[1])}</span><p>Acrobacia</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[1])}</span><p>Furtividade</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[1])}</span><p>Prestidigitação</p></div>                    
                    {/* Modificador de Inteligencia */}
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[3])}</span><p>Arcanismo</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[3])}</span><p>História</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[3])}</span><p>Invesstigação</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[3])}</span><p>Natureza</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[3])}</span><p>Religião</p></div>
                    {/* Modificador de Sabedoria */}
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[4])}</span><p>Intuição</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[4])}</span><p>Lidar com Animais</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[4])}</span><p>Medicina</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[4])}</span><p>Percepção</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[4])}</span><p>Sobrevivência</p></div>
                    {/* Modificador de Carisma */}
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[5])}</span><p>Atuação</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[5])}</span><p>Enganação</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[5])}</span><p>Intimidação</p></div>
                    <div className={styles.periciasContainer__body__pericia}><span>{modificador(atributos[5])}</span><p>Persuasâo</p></div>
                </div>
                <p className={styles.periciasContainer__titulo}>Pericias</p>
            </section>
            : <></>
    )
}

export default Pericias