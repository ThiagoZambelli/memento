import { useSetRecoilState } from "recoil";
import { logado } from "state/atom";
import useSetUserLogado from "./useSetUserLogado";

export default function useDeslogar() {
    const limparUsuario = useSetUserLogado();
    const logar = useSetRecoilState(logado);    
    const logando = () => {
        limparUsuario('');
        sessionStorage.clear();
        logar(false)
    }
    return logando; 
}