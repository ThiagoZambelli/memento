import IBannerItem from 'Pages/ForjaDeLendas/interface/IBannerItem'
import React from 'react'
import style from './infoClasse.module.scss';

function InfosClasse({dadoVida, armaProf,armaduraProf, testeResistencia, listaPericias}:IBannerItem) {
  return (
    <section className={style.infoClasse}>
        <div>
            <h3>Vida</h3>
            <p><span>Dado de vida:</span> D{dadoVida}</p>
            <p><span>Vida Max. inicial:</span>{dadoVida} + CON</p>
        </div>
        <div>
            <h3>Proeficiencias</h3>
            <p><span>Armadura:</span> {armaduraProf}</p>
            <p><span>Armas:</span> {armaProf}</p>
        </div>
        <div>
            <h3>Pericias e Resistencias</h3>
            <p><span>Pericias:</span> {listaPericias}</p>
            <p><span>Resistencias:</span> {testeResistencia}</p>
        </div>
    </section>
  )
}

export default InfosClasse