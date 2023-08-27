import React, { useEffect, useState } from 'react'
import styles from './Resistencias.module.scss';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import { useRecoilValue } from 'recoil';
import usePegaModificador from '../../hook/usePegaModficador';
import { TbShieldUp } from 'react-icons/tb'

function Resistencias() {
    const fichaEscolhida = useRecoilValue(ficha);
    const [res1, setRes1] = useState('');
    const [res2, setRes2] = useState('');
    const [atributos, setAtributos] = useState<number[]>();
    const modificador = usePegaModificador();


    useEffect(() => {
        setRes1(fichaEscolhida.classe?.testeResistencia[0]!)
        setRes2(fichaEscolhida.classe?.testeResistencia[1]!)
        setAtributos(fichaEscolhida.atributos || [10, 10, 10, 10, 10, 10])
    }, []);

    useEffect(() => {
        setAtributos(fichaEscolhida.atributos)
    }, [fichaEscolhida.atributos]);

    const iguala = (resistencia: string) => {
        return resistencia === res1 || resistencia === res2
    }

    return (

        atributos && atributos?.length > 0
            ? <section className={styles.resistenciasContainers}>
                <div className={styles.resistenciasContainers__body}>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Força") && <TbShieldUp />}<span>Força</span><p>{iguala("Força") ? modificador(atributos![0]) + 2 : modificador(atributos![0])}</p></div>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Destreza") && <TbShieldUp />}<span>Destreza</span><p>{iguala("Destreza") ? modificador(atributos![1]) + 2 : modificador(atributos![1])}</p></div>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Constituição") && <TbShieldUp />}<span>Constituição</span><p>{iguala("Constituição") ? modificador(atributos![2]) + 2 : modificador(atributos![2])}</p></div>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Inteligência") && <TbShieldUp />}<span>Inteligência</span><p>{iguala("Inteligência") ? modificador(atributos![3]) + 2 : modificador(atributos![3])}</p></div>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Sabedoria") && <TbShieldUp />}<span>Sabedoria</span><p>{iguala("Sabedoria") ? modificador(atributos![4]) + 2 : modificador(atributos![4])}</p></div>
                    <div className={styles.resistenciasContainers__body__reistencia}>{iguala("Carisma") && <TbShieldUp />}<span>Carisma</span><p>{iguala("Carisma") ? modificador(atributos![5]) + 2 : modificador(atributos![5])}</p></div>
                </div>
                <p className={styles.resistenciasContainers__titulo}>Testes de Rêsistencia</p>
            </section>
            : <div className={styles.resistenciasContainersNaoAjustada}>
                Ajuste seus atributos clicando na engrenagem para liberar a modificação, e novamente para salva-la!
            </div>

    )
}

export default Resistencias