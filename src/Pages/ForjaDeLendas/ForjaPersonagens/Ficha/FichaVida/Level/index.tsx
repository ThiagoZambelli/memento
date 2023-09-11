import React, { useState } from 'react'
import styles from './Level.module.scss';
import { atualizaPersonagem } from 'Services/personagem';
import useAtualizaLvl from '../hook/useAtualizaLvl';
import { FaSave } from 'react-icons/fa';

interface ILevelProps {
    lvl: number;
    id: string
}

function Level({ id, lvl }: ILevelProps) {
    const [modificando, setModificando] = useState(false)
    const [levelAtual, setLevelAtual] = useState<number>(lvl)
    const atualizaLvl = useAtualizaLvl()
    const leveis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const aoClicar = () => {
        setModificando(!modificando);
    }
    const atualizar = async () => {
        try {
            atualizaLvl(levelAtual);
            await atualizaPersonagem("lvl", levelAtual, id)
        }
        catch (err) {
            console.log(err);
        }
        aoClicar();
    }

    return (
        !modificando
            ? <div className={styles.level}>
                <span className={styles.level__lvl} onClick={aoClicar} >{lvl}</span>
                <p>Level</p>
            </div>
            : <div className={styles.level}>
                <button className={styles.level__btnSave}  onClick={atualizar}><FaSave /></button>
                <select value={levelAtual} onChange={(e) => setLevelAtual(parseInt(e.target.value))}>
                    {leveis.map(e => (<option key={e} value={e}>{e}</option>))}
                </select>
                <p>Level</p>
            </div>
    )
}

export default Level