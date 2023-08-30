import React, { useEffect, useState } from 'react'
import usePegaModificador from '../../hook/usePegaModficador';
import { useRecoilValue } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import styles from './Pericias.module.scss';
import Pericia from './Pericia';

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
                    <Pericia atributo={atributos[0]} nome='Atletismo'/>                    
                    {/* Modificador de Destreza */}
                    <Pericia atributo={atributos[1]} nome='Acrobacia'/> 
                    <Pericia atributo={atributos[1]} nome='Furtividade'/> 
                    <Pericia atributo={atributos[1]} nome='Prestidigitação'/>                                 
                    {/* Modificador de Inteligencia */}
                    <Pericia atributo={atributos[3]} nome='Arcanismo'/>  
                    <Pericia atributo={atributos[3]} nome='História'/>
                    <Pericia atributo={atributos[3]} nome='Invesstigação'/>  
                    <Pericia atributo={atributos[3]} nome='Natureza'/>  
                    <Pericia atributo={atributos[3]} nome='Religião'/>               
                    {/* Modificador de Sabedoria */}
                    <Pericia atributo={atributos[4]} nome='Intuição'/>
                    <Pericia atributo={atributos[4]} nome='Lidar com Animais'/>
                    <Pericia atributo={atributos[4]} nome='Medicina'/>
                    <Pericia atributo={atributos[4]} nome='Percepção'/>
                    <Pericia atributo={atributos[4]} nome='Sobrevivência'/>                  
                    {/* Modificador de Carisma */}
                    <Pericia atributo={atributos[5]} nome='Atuação'/>
                    <Pericia atributo={atributos[5]} nome='Enganação'/>
                    <Pericia atributo={atributos[5]} nome='Intimidação'/>
                    <Pericia atributo={atributos[5]} nome='Persuasâo'/>    
                </div>
                <p className={styles.periciasContainer__titulo}>Pericias</p>
            </section>
            : <></>
    )
}

export default Pericias