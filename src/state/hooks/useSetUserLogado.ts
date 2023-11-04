import { useSetRecoilState } from "recoil";
import { nomeUserserLogado } from "state/atom";


export default function useSetUserLogado(){
    const set = useSetRecoilState(nomeUserserLogado);

    return (nome: string) => {
        set(nome);
    }
}