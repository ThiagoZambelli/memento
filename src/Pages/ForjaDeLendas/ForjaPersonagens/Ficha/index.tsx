import { ficha } from 'Pages/ForjaDeLendas/state/atom'
import PaginaErro from 'Pages/PaginaErro';
import React from 'react'
import { useRecoilValue } from 'recoil'

function Ficha() {
    const fichaEscolhida = useRecoilValue(ficha);
    return (
        fichaEscolhida._id !== ''
            ? <section>
                <p>{fichaEscolhida.nomePersonagem}</p>
            </section>
            : <PaginaErro />
    )
}

export default Ficha