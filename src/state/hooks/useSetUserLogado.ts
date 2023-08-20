import { useSetRecoilState } from "recoil";
import { userLogado } from "state/atom";


export default function useSetUserLogado(){
    const set = useSetRecoilState(userLogado);

    return (nome: string) => {
        set(nome);
    }
}