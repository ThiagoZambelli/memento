import { useSetRecoilState } from "recoil";
import { logado } from "state/atom";

export default function useDeslogar() {
    const logar = useSetRecoilState(logado);    
    const logando = () => {
        logar(false)
    }
    return logando; 
}