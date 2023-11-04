import { useRecoilValue } from "recoil";
import { comentarios } from "state/atom";

export default function usePegaComentarios () {
    const comentariosAtuais = useRecoilValue(comentarios);

    return comentariosAtuais;
}