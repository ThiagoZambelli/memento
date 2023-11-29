import Carregamento from 'Components/Carregamento';
import { getContos, getListaContosFavoritos} from 'Services/contos';
import IConto from 'interface/IConto';
import React, { useEffect, useState } from 'react'
import CardDeConto from './CardDeConto';
import styles from './ContosHome.module.scss';
import { useRecoilValue } from 'recoil';
import { logado } from 'state/atom';


function ContosHome() {
  const [contos, setContos] = useState<IConto[]>();
  const [ lista, setLista] = useState<string[]>();
  const logadoValue = useRecoilValue(logado);
  
  
 
  
  const testaLista = (id:string) => {
    return lista?.includes(id);
  }

  const pegaLista = async () => {
    setContos(await getContos())
    if(logadoValue){
      setLista(await getListaContosFavoritos())
    }   
  }

  useEffect(() => {
    pegaLista();    
  }, [])

  return (
    <section className={styles.contosHome}>
      {!contos && <Carregamento />}
      <div className={styles.contosHome__cards}>
        {contos && contos?.length > 0 && contos?.map(e => (<CardDeConto favorito={testaLista(e._id) || false}  key={e._id} {...e} />))}
      </div>
    </section>
  )
}

export default ContosHome