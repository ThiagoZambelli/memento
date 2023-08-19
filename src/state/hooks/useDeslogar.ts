import { useSetRecoilState } from "recoil";
import { logado } from "state/atom";

export default function useDeslogar() {
    const logar = useSetRecoilState(logado);    
    const logando = () => {
        sessionStorage.clear();
        logar(false)
    }
    return logando; 
}