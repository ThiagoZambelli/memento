import React, { useEffect, useState } from "react";
import styles from "./ContosFavoritos.module.scss";
import IConto from "interface/IConto";
import { getContosFavoritos } from "Services/contos";
import CardDeContoFavoritos from "./CardDeContoFavoritos";
import { GiRead } from "react-icons/gi";
import LoaderPerfil from "Components/LoaderPerfil";

function ContosFavoritos() {
  const [listaFavoritos, setListaFavoritos] = useState<IConto[]>([]);

  const pegaLista = async () => {
    setListaFavoritos(await getContosFavoritos());
  };

  useEffect(() => {
    pegaLista();
  }, []);

  return (
    <div id="contosFavoritos" className={styles.contos}>
      <h2 className={styles.contos__titulo}>
        <GiRead />
        Meus Contos Favoritos
      </h2>
      <div className={styles.contos__body}>
        {listaFavoritos.length > 0 ? (
          listaFavoritos.map((e) => <CardDeContoFavoritos key={e._id} {...e} />)
        ) : (
          <span>Ainda não tem um favorito?</span>
        )}
      </div>
    </div>
  );
}

export default ContosFavoritos;
