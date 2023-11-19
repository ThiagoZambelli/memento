import React, { useEffect, useState } from 'react'
import styles from './FichaAtributos.module.scss';
import Atributo from './Atributo';
import PericiasEResistencias from './PericiasEResistencias';
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';




function FichaAtributos(fichaEscolhida: IPersonagensProntos) {
    const [For, setFor] = useState<number>()
    const [Dex, setDex] = useState<number>()
    const [Con, setCon] = useState<number>()
    const [Int, setInt] = useState<number>()
    const [Sab, setSab] = useState<number>()
    const [Car, setCar] = useState<number>()    


    useEffect(() => {
        if (fichaEscolhida.atributos && fichaEscolhida.atributos.length === 6) {
            setFor(fichaEscolhida.atributos[0]);
            setDex(fichaEscolhida.atributos[1]);
            setCon(fichaEscolhida.atributos[2]);
            setInt(fichaEscolhida.atributos[3]);
            setSab(fichaEscolhida.atributos[4]);
            setCar(fichaEscolhida.atributos[5]);
        } else {
            setFor(10);
            setDex(10);
            setCon(10);
            setInt(10);
            setSab(10);
            setCar(10);
        }

    }, [])
    

    return (
        <section className={styles.fichaAtributos}>
            <div className={styles.fichaAtributos__body}>
                <div className={styles.fichaAtributos__body__atributos}>                    
                    <Atributo nome='For' valor={For!} />
                    <Atributo nome='Dex' valor={Dex!} />
                    <Atributo nome='Con' valor={Con!} />
                    <Atributo nome='Int' valor={Int!} />
                    <Atributo nome='Sab' valor={Sab!} />
                    <Atributo nome='Car' valor={Car!} />
                </div>
                <div>
                    <PericiasEResistencias {...fichaEscolhida}/>
                </div>
            </div>
        </section>
    )
}

export default FichaAtributos;