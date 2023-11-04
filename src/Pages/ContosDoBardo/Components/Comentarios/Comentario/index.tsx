import IComentario from "interface/IComentario";
import React from "react";
import { HiChatAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Comentario.module.scss";
import { useRecoilValue } from "recoil";
import { idUserserLogado, logado } from "state/atom";
import { deletComentario } from "Services/comentario";

interface ComentarioProps extends IComentario{
  idConto:string,
  setRecarregar: (e:number) => void,
  reacarregar:number
}

function Comentario({idConto, _id, texto, idUser, nomeUser, reacarregar, setRecarregar }: ComentarioProps) {
  const valorLogado = useRecoilValue(logado);
  const valorIdUserLogado = useRecoilValue(idUserserLogado);

  const aoDeletar = async () => {    
    const comentarioDeletado = {
      idComentario:_id,
      idConto:idConto
    };    
    await deletComentario(comentarioDeletado);    
    setRecarregar(reacarregar + 1)
  };


  return (
    <section key={_id} className={styles.comentario}>
      <h3 className={styles.comentario__user}>
        <div className={styles.comentario__user__nome}>
          <HiChatAlt />
          {nomeUser}
        </div>
        {valorLogado && valorIdUserLogado === idUser && (
          <AiFillDelete onClick={aoDeletar} className={styles.comentario__user__delet} />
        )}
      </h3>
      <p className={styles.comentario__texto}>{texto}</p>
    </section>
  );
}

export default Comentario;
