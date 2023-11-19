import React, { useState, useEffect } from 'react'
import usePegaModificador from '../../../hook/usePegaModficador';
import styles from './Pericia.module.scss';
import { AiOutlineCheck } from 'react-icons/ai'
import useComparaPericia from './hook/useComparaPericia';

import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import useGeraProeficiencia from 'Pages/FichaPronta/FichaVida/hook/useGeraProeficiencia';

interface IPericiaProps {
    atributo: number,
    nome: string,
    fichaEscolhida: IPersonagensProntos
}
function Pericia({ fichaEscolhida, nome, atributo }: IPericiaProps) {
    const [check, setCheck] = useState(false)
    const modificador = usePegaModificador();
    const verificar = useComparaPericia(fichaEscolhida);    
    const [proeficiencia, setProeficiencia] = useState(useGeraProeficiencia(fichaEscolhida.lvl))

    useEffect(()=>{
        setCheck(verificar(nome))
    },[])
    
    return (
        <div className={styles.pericia}>
            <div>{check && <AiOutlineCheck />}</div>
            <span>{check ? modificador(atributo) + proeficiencia! : modificador(atributo)}</span>
            <p>{nome}</p>
        </div>
    )
}

export default Pericia