import React from "react";
import useAbreModalLogin from "state/hooks/useAbreModalLogin";
import styles from "./IntroBtn.module.scss";

function IntroBtn() {
  const abrirModalLogin = useAbreModalLogin();
  return (
    <button onClick={() => abrirModalLogin()} className={styles.btnLogar}>
      Logar!
    </button>
  );
}

export default IntroBtn;
