import React, { useEffect, useState } from 'react'
import styles from './MeusPersonagens.module.scss'
import IPersonagensProntos from 'Pages/ForjaDeLendas/interface/IPersonagensProntos';
import { meusPersonagens } from 'Services/personagem';
import CardPersonagem from './CardPersonagem';
import { FaUsers } from 'react-icons/fa';

function MeusPersonagens() {

  const [lista, setLista] = useState<IPersonagensProntos[]>([]);  


  useEffect(() => {
    pegaClasse();
  }, [])

  const pegaClasse = async () => {
    let listaDePerssonagens = await meusPersonagens()
    setLista(listaDePerssonagens);    
  }

  return (
    <div id='personagens' className={styles.personages}>
      <h2 className={styles.personages__titulo}>Meus Personagens</h2>
      <div className={styles.personages__body}>
        {lista.length > 0 ? lista.map(e => <CardPersonagem  key={e._id} {...e} />) : <span>Ainda não tem um Personagem?</span>}
      </div>
    </div>
  )
}

export default MeusPersonagens