import React, { useEffect, useState } from "react";
import styles from "./SideBarMenu.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import useEstadoSideBar from "state/hooks/useEstadoSideBar";
import useAtivaSideBar from "state/hooks/useAtivaSideBar";
import SideBarItens from "./SideBarItens";
import SideBarCreditos from "./SideBarCreditos";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import useAbreModalCadastro from "state/hooks/useAbreModalCadastro";
import { useRecoilValue } from "recoil";
import { logado, nomeUserserLogado } from "state/atom";
import useDeslogar from "state/hooks/useDeslogar";
import { RiUserLine } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import SideCopyrigth from "./SideCopyrigth";
import { useNavigate } from "react-router-dom";

function SideBarMenu() {
  const estadoSideBar = useEstadoSideBar();
  const abreFecha = useAtivaSideBar();
  const [valorSideBar, setValorSideBar] = useState<string>();
  const abrirModalLogin = useAbreModalLogin();
  const abrirModalCadastro = useAbreModalCadastro();
  const estadoLogado = useRecoilValue(logado);
  const nomeUserLogado = useRecoilValue(nomeUserserLogado);
  const aoDeslogar = useDeslogar();
  const ir = useNavigate();
  const fecha = useAtivaSideBar();

	const fechaMenu = () => {
    ir('/perfil')
		fecha();
	}

  const deslogar = () => {
    aoDeslogar();
  };

  useEffect(() => {
    if (estadoSideBar) {
      setValorSideBar(styles.sideBarAtiva);
    } else {
      setValorSideBar(styles.sideBarDesativa);
    }
  }, [estadoSideBar]);

  return (
    <section className={`${styles.sideBar} ${valorSideBar}`}>
      <div className={styles.sideBar__header}>
        <div className={styles.sideBar__header__top}>
          {!estadoLogado ? (
            <>
              <button onClick={abrirModalLogin}>Login</button>
              <button onClick={abrirModalCadastro}>Register</button>
            </>
          ) : (
            <button onClick={deslogar}>
              <GiExitDoor />
              Deslogar
            </button>
          )}
          <AiOutlineClose onClick={abreFecha} />
        </div>
        {estadoLogado && (
          <div className={styles.sideBar__header__nome} onClick={() => fechaMenu()}>
            <RiUserLine />
            {nomeUserLogado}
          </div>
        )}
      </div>
      <SideBarItens />
      <div className={styles.sideBar__footer}>
        <SideBarCreditos />
        <SideCopyrigth />
      </div>
    </section>
  );
}

export default SideBarMenu;
