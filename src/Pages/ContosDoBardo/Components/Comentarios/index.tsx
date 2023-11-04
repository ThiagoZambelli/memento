import React from "react";
import styles from "./Comentarios.module.scss";
import { HiChatAlt2 } from "react-icons/hi";
import IComentario from "interface/IComentario";
import Comentario from "./Comentario";
import SemComentario from "./SemComentario";
import Comentar from "./Comentar";


interface ComentariosProps {
  idConto: string;
  lista?: IComentario[];
  setRecarregar: (e:number) => void,
  reacarregar:number
}

function Comentarios({ reacarregar, setRecarregar, idConto, lista }: ComentariosProps) {  

  return (
    <section className={styles.comentarios}>
      <h2 className={styles.comentarios__titulo}>
        <HiChatAlt2 />
        Comentarios
      </h2>
      <Comentar reacarregar={reacarregar} setRecarregar={setRecarregar} idConto={idConto} />
      <div className={styles.comentarios__body}>
        {lista && lista.length > 0 ? (
          lista.map((e) => <Comentario key={e._id} reacarregar={reacarregar} setRecarregar={setRecarregar} idConto={idConto} {...e} />)
        ) : (
          <SemComentario />
        )}
      </div>
    </section>
  );
}

export default Comentarios;
