import { useSetRecoilState } from "recoil";
import { logado } from "state/atom";

export default function useLogar() {
    const logar = useSetRecoilState(logado);    
    const logando = () => {
        logar(true)
    }
    return logando; 
}