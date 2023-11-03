import React, { useState } from 'react'
import styles from './Comentarios.module.scss';
import {HiChatAlt2} from 'react-icons/hi'
import IComentario from 'interface/IComentario';
import Comentario from './Comentario';

function Comentarios() {
    const [listaComentarios, setListaComentarios] = useState<IComentario[] | null>()
    // [
    //     {
    //         id:'pipca',
    //         texto:'Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais do grande explorador da verdade, o mestre-construtor. da felicidade humana. Ninguém rejeita, não gosta, ou evita o prazer em si, porque é prazer, mas porque aqueles que não sabem como buscar prazer encontram racionalmente conseqüências que são extremamente dolorosas. ',
    //         user:'Thiago'
    //     },
    //     {
    //         id:'pipca2',
    //         texto:'Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais do grande explorador da verdade, o mestre-construtor. da felicidade humana. Ninguém rejeita, não gosta, ou evita o prazer em si, porque é prazer, mas porque aqueles que não sabem como buscar prazer encontram racionalmente conseqüências que são extremamente dolorosas. ',
    //         user:'Sr. Pipoca'
    //     }
    // ]
  return (
    <section className={styles.comentarios}>
        <h2 className={styles.comentarios__titulo}><HiChatAlt2 />Comentarios</h2>
        <div className={styles.comentarios__body}>
            {listaComentarios && listaComentarios.length > 0 && listaComentarios.map(e => <Comentario {...e}/>)}
        </div>
    </section>
  )
}

export default Comentarios