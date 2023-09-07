import React, { useState, useEffect } from 'react'
import { BsPencilSquare } from 'react-icons/bs';
import styles from './CardTexto.module.scss';
import usePegaQualTexto from './hook/usePegaQualTexto';
import { atualizaTextos } from 'Services/personagem';
import { useRecoilValue } from 'recoil';
import { ficha } from 'Pages/ForjaDeLendas/state/atom';


interface ICardTextoProps {
    titulo: string,
    onChange: (value: string) => void,
    texto: string,
    busca: string
}

function CardTexto({ busca, titulo, onChange, texto }: ICardTextoProps) {
    const [escrever, setEscrever] = useState(false);
    const fichaEscolhida = useRecoilValue(ficha);
    const valor = usePegaQualTexto()

    const habilitaEscrever = () => {
        setEscrever(!escrever);
    }

    const atualiza = async () => {
        if (escrever) {
            try {
                await atualizaTextos(busca, texto, fichaEscolhida._id)
            }
            catch (err) {
                console.log(err)
            }
        }
        habilitaEscrever();
    }


    useEffect(() => {
        onChange(valor(busca)!)
    }, [])

    return (
        <div className={styles.cardTexto}>
            <BsPencilSquare onClick={atualiza} className={styles.cardTexto__btn} />
            <h3 className={styles.cardTexto__titulo}>{titulo}</h3>
            {!escrever
                ? <p className={styles.cardTexto__texto}>{texto}</p>
                : <textarea className={styles.cardTexto__textArea} value={texto} onChange={(e) => { onChange(e.target.value) }}></textarea>
            }
        </div>
    )
}

export default CardTexto