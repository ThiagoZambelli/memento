import Carregamento from 'Components/Carregamento';
import { getContos } from 'Services/contos';
import IConto from 'interface/IConto';
import React, { useEffect, useState } from 'react'
import CardDeConto from './CardDeConto';
import styles from './ContosHome.module.scss';

function ContosHome() {
  const [contos, setContos] = useState<IConto[]>();

  const pegaLista = async () => {
    setContos(await getContos())
  }
  useEffect(() => {
    pegaLista();
  }, [])

  return (
    <section className={styles.contosHome}>
      {!contos && <Carregamento />}
      <div className={styles.contosHome__cards}>
        {contos && contos?.length > 0 && contos?.map(e => (<CardDeConto key={e._id} {...e} />))}
      </div>
    </section>
  )
}

export default ContosHome