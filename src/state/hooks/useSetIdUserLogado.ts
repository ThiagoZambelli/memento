import { useSetRecoilState } from "recoil";
import { idUserserLogado } from "state/atom";


export default function useSetIdUserLogado(){
    const set = useSetRecoilState(idUserserLogado);

    return (id: string) => {
        set(id);
    }
}