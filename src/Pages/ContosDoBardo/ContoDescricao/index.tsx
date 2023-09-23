import Carregamento from 'Components/Carregamento';
import { getConto } from 'Services/contos';
import IConto from 'interface/IConto'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function ContoDescricao() {
    const [conto, setConto] = useState<IConto>()
    const idConto = useLocation().pathname.replace("/contos-do-bardo/descricao/", "");

    const pegaConto = async () => {
        setConto(await getConto(idConto))
    }

    useEffect(() => {
        pegaConto();
    }, [])
    
    return (
        <section>
            {!conto
                ? <Carregamento />
                : <div>{conto.titulo}</div>}
        </section>
    )
}

export default ContoDescricao