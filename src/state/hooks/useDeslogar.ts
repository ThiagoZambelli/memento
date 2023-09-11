import { useSetRecoilState } from "recoil";
import { logado } from "state/atom";
import useSetUserLogado from "./useSetUserLogado";
import { useNavigate } from "react-router-dom";

export default function useDeslogar() {
    const limparUsuario = useSetUserLogado();
    const ir = useNavigate()
    const logar = useSetRecoilState(logado);    
    const logando = () => {
        limparUsuario('');
        sessionStorage.clear();
        logar(false)
        ir('/')
    }
    return logando; 
}