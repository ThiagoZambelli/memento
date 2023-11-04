import React, { useState } from "react";
import styles from "./Comentar.module.scss";
import useComenta from "../hooks/useComenta";
import { useRecoilValue } from "recoil";
import { idUserserLogado, logado, nomeUserserLogado } from "state/atom";

interface ComentarProps {
  idConto: string,
  setRecarregar: (e:number) => void,
  reacarregar:number
}

function Comentar({ reacarregar, setRecarregar, idConto }: ComentarProps) {
  const comentar = useComenta();
  const [texto, setTexto] = useState("");
  const [carregando, setCarregando] = useState(false);
  const nomeUser = useRecoilValue(nomeUserserLogado);
  const idUser = useRecoilValue(idUserserLogado);
  const valorLogado = useRecoilValue(logado);

  const aoComentar = async (e: React.FormEvent<HTMLFormElement>) => {
    setCarregando(true);
    e.preventDefault();
    const novoComentario = {
      idConto: idConto,
      nomeUser: nomeUser,
      idUser: idUser,
      texto: texto,
    };
    await comentar(novoComentario);
    setTexto("");
    setCarregando(false);
    setRecarregar(reacarregar + 1)
  };

  return !valorLogado ? (
    <div>Logue para Comentar</div>
  ) : (
    <form className={styles.comentar} onSubmit={(e) => aoComentar(e)}>
      <textarea
        rows={1}
        placeholder="Comente Aqui"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button disabled={!valorLogado}>
        {!carregando ? (
          "Comentar"
        ) : (
          <span className={styles.comentar__loader}></span>
        )}
      </button>
    </form>
  );
}

export default Comentar;
