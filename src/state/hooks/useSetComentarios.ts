import IComentario from "interface/IComentario";
import { useSetRecoilState } from "recoil";
import { comentarios } from "state/atom";


export default function useSetComentarios(){
    const set = useSetRecoilState(comentarios);

    return (lista: IComentario[]) => {
        if(lista && lista.length > 0){
           return set(lista);
        } else {
            return set([]);
        }
    }
}