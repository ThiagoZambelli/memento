import React, { useEffect, useState } from 'react'
import styles from './FichaAtributos.module.scss';
import Atributo from './Atributo';
import { BsGearFill } from "react-icons/bs"
import AtualizaAtributo from './AtualizaAtributo';
import { atualizaAtributos } from 'Services/personagem';
import useAtualizaAtributos from './hook/useAtualizaAtributas';
import PericiasEResistencias from './PericiasEResistencias';

interface IAtributosProps {
    atributos?: number[]
    _id: string
}


function FichaAtributos({ _id, atributos }: IAtributosProps) {
    const [For, setFor] = useState<number>()
    const [Dex, setDex] = useState<number>()
    const [Con, setCon] = useState<number>()
    const [Int, setInt] = useState<number>()
    const [Sab, setSab] = useState<number>()
    const [Car, setCar] = useState<number>()
    const [atualiza, setAtualiza] = useState(false);
    const atualizaFicha = useAtualizaAtributos();


    useEffect(() => {
        if (atributos && atributos.length === 6) {
            setFor(atributos[0]);
            setDex(atributos[1]);
            setCon(atributos[2]);
            setInt(atributos[3]);
            setSab(atributos[4]);
            setCar(atributos[5]);
        } else {
            setFor(10);
            setDex(10);
            setCon(10);
            setInt(10);
            setSab(10);
            setCar(10);
        }

    }, [])

    const mudaAtualizacao = async () => {
        if (atualiza) {
            const atributosParaAtualizar = [For!, Dex!, Con!, Int!, Sab!, Car!];
            const id = _id;
            await atualizaAtributos(atributosParaAtualizar, id)
            atualizaFicha(atributosParaAtualizar);
            setAtualiza(!atualiza);
        }
        else {
            setAtualiza(!atualiza);
        }

    }

    return (
        <section className={styles.fichaAtributos}>
            <div className={styles.fichaAtributos__body}>
                <div className={styles.fichaAtributos__body__atributos}>
                    <div className={styles.fichaAtributos__body__atributos__header}>
                        <p>Atributos</p>
                        <button className={`${atualiza && styles.btnAtivo}`} onClick={mudaAtualizacao}><BsGearFill /></button>
                    </div>
                    {!atualiza ? <Atributo nome='For' valor={For!} /> : <AtualizaAtributo onChange={setFor} nome='For' value={For!} />}
                    {!atualiza ? <Atributo nome='Dex' valor={Dex!} /> : <AtualizaAtributo onChange={setDex} nome='Dex' value={Dex!} />}
                    {!atualiza ? <Atributo nome='Con' valor={Con!} /> : <AtualizaAtributo onChange={setCon} nome='Con' value={Con!} />}
                    {!atualiza ? <Atributo nome='Int' valor={Int!} /> : <AtualizaAtributo onChange={setInt} nome='Int' value={Int!} />}
                    {!atualiza ? <Atributo nome='Sab' valor={Sab!} /> : <AtualizaAtributo onChange={setSab} nome='Sab' value={Sab!} />}
                    {!atualiza ? <Atributo nome='Car' valor={Car!} /> : <AtualizaAtributo onChange={setCar} nome='Car' value={Car!} />}
                </div>
                <div>
                    <PericiasEResistencias />
                </div>
            </div>
        </section>
    )
}

export default FichaAtributos;