import React, { useEffect, useState } from 'react'
import { meusPersonagens } from 'Services/personagem';
import { useRecoilValue } from 'recoil';
import { logado } from 'state/atom';
import NaoLogado from 'Components/NaoLogado';
import styles from "./ForjaPersonagens.module.scss";
import CardPersonagem from './CardPersonagem';
import { useLocation } from 'react-router-dom';
import IPersonagensProntos from '../interface/IPersonagensProntos';
import ListaVazia from './ListaVazia';
import Carregamento from 'Components/Carregamento';

function ForjaPersonagens() {
  const [lista, setLista] = useState<IPersonagensProntos[]>([]);
  const [carregando, setCarregando] = useState(true);
  const estadoLogado = useRecoilValue(logado);
  const paginaAtual = useLocation();


  useEffect(() => {
    estadoLogado && pegaClasse();
  }, [paginaAtual.pathname])

  const pegaClasse = async () => {
    let listaDePerssonagens = await meusPersonagens()
    setLista(listaDePerssonagens);
    if (listaDePerssonagens) {
      setCarregando(false);
    }
  }

  return (
    estadoLogado
      ? <section className={styles.personagens}>
        {carregando
          ? <div className={styles.personagens__carregando}><Carregamento /></div>
          : <div className={styles.personagens__carregados}>
            {lista.length > 0
              ? lista.map(e => <CardPersonagem key={e._id} {...e} />)
              : <ListaVazia />}
          </div>}

      </section>
      : <NaoLogado />
  )
}

export default ForjaPersonagens