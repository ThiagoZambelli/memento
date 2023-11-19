import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';
import styles from './Pericias.module.scss';
import Pericia from './Pericia';
import { FaSave } from 'react-icons/fa'

import Loader from 'Components/Loader';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';

function Pericias(fichaEscolhida: IPersonagensProntos) { 

    const [atributos, setAtributos] = useState<number[]>(fichaEscolhida.atributos || [10, 10, 10, 10, 10, 10]);
   
    
    

    return (
        atributos && atributos?.length > 0
            ? <section className={styles.periciasContainer}>               
                <div className={styles.periciasContainer__body}>
                    {/* Modificador de Força */}
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[0]} nome='Atletismo' />
                    {/* Modificador de Destreza */}
                    <Pericia fichaEscolhida={fichaEscolhida} atributo={atributos[1]} nome='Acrobacia' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[1]} nome='Furtividade' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[1]} nome='Prestidigitação' />
                    {/* Modificador de Inteligencia */}
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[3]} nome='Arcanismo' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[3]} nome='História' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[3]} nome='Invesstigação' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[3]} nome='Natureza' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[3]} nome='Religião' />
                    {/* Modificador de Sabedoria */}
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[4]} nome='Intuição' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[4]} nome='Lidar com Animais' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[4]} nome='Medicina' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[4]} nome='Percepção' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[4]} nome='Sobrevivência' />
                    {/* Modificador de Carisma */}
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[5]} nome='Atuação' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[5]} nome='Enganação' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[5]} nome='Intimidação' />
                    <Pericia fichaEscolhida={fichaEscolhida}  atributo={atributos[5]} nome='Persuasâo' />
                </div>
                <p className={styles.periciasContainer__titulo}>Pericias</p>
            </section>
            : <></>
    )
}

export default Pericias