import Carregamento from "Components/Carregamento";
import styles from './ContosFavoritos.module.scss'
import { getContosFavoritos } from "Services/contos";
import IConto from "interface/IConto";
import React, { useEffect, useState } from "react";
import CardDeContoFavoritos from "./CardDeContoFavoritos";

function ContosFavoritos() {
  const [listaFavoritos, setListaFavoritos] = useState<IConto[]>([]);
  const [carregar, setCarregar] = useState<number>(1);   

  const pegaLista = async () => {
    setListaFavoritos(await getContosFavoritos());
  };
  useEffect(() => {
    pegaLista();
  }, []);
  useEffect(() => {
    pegaLista();
  }, [carregar]);
  
  return (
    // <PaginaErro />
    <section className={styles.contosHome}>      
      <div className={styles.contosHome__cards}>
      {!listaFavoritos.length && <div className={styles.contosHome__cards__vazio}>Você ainda não tem favoritos</div>}
        {listaFavoritos && listaFavoritos?.length > 0 && listaFavoritos?.map(e => (<CardDeContoFavoritos valor={carregar} recarregar={setCarregar}  key={e._id} {...e} />))}
      </div>
    </section>
  );
}

export default ContosFavoritos;
