import Carregamento from 'Components/Carregamento';
import { getContos } from 'Services/contos';
import IConto from 'interface/IConto';
import React, { useEffect, useState } from 'react'
import CardDeConto from './CardDeConto';

function ContosHome() {
  const [contos, setContos] = useState<IConto[]>();

  const pegaLista = async () => {
    setContos(await getContos())
  }
  useEffect(() => {
    pegaLista();
  }, [])

  return (
    <section>
      {contos && contos?.length > 0
        ? contos?.map(e => (<CardDeConto />))
        : <Carregamento />}
    </section>
  )
}

export default ContosHome