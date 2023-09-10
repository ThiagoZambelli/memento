import React, { useState } from 'react'
import usePegaModificador from '../../FichaAtributos/hook/usePegaModficador'
import { BsGearFill } from 'react-icons/bs'
import { GiHeartPlus } from 'react-icons/gi'
import styles from './Vida.module.scss';
import { atualizaPersonagem } from 'Services/personagem';
import useAtualizaVida from '../hook/useAtualizaVida';

interface IVidaProps {
    dado: number,
    con: number,
    vida: number,
    lvl: number,
    id: string
}

function Vida({ id, lvl, dado, con, vida }: IVidaProps) {
    const [alterando, setAlterando] = useState(false)
    const [valorVida, setValorVida] = useState(vida);
    const atualizaVida = useAtualizaVida();
    const modificador = usePegaModificador()

    const mudaVida = () => {
        setAlterando(!alterando);
    }

    const atualiza = async () => {
        if (alterando) {
            try {
                atualizaVida(valorVida);
                await atualizaPersonagem("vida", valorVida, id)
            }
            catch (err) {
                console.log(err)
            }
        }
        mudaVida();
    }

    return (
        <div className={styles.vida}>
            <button className={`${styles.vida__btn} ${alterando ? styles.ativo : styles.naoAtivo}`} onClick={atualiza}><BsGearFill /></button>
            {!alterando
                ? <div className={styles.vida__maximo}>
                    <span>
                        {vida + modificador(con) + dado}
                    </span>
                    <p>Vida Maxima <GiHeartPlus /></p>
                </div>
                :
                <div className={styles.vida__modificacao}>
                    <div className={styles.vida__modificacao__container}>
                        <p>Mod. Con: </p>
                        <span>{modificador(con) * (lvl - 1)}</span>
                    </div>
                    <div className={styles.vida__modificacao__container}>
                        <p>Primeiro Lvl: </p>
                        <span>{dado + modificador(con)}</span>
                    </div>
                    <div className={styles.vida__modificacao__container}>
                        <p>Valor tirado: </p>
                        <input type="number" value={valorVida} onChange={e => setValorVida(parseInt(e.target.value))} />
                    </div>
                </div>
            }

        </div>
    )
}

export default Vida