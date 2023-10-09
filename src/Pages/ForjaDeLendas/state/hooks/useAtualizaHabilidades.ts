import { useSetRecoilState } from "recoil";
import { ficha } from "../atom";
import IHabilidade from "interface/IHabilidade";

export default function useAtualizaHabilidades() {
    const atualiza = useSetRecoilState(ficha);

    return (habilidades: IHabilidade[]) => {
        const atualizacao = {
            habilidades: habilidades
        }
        
        // Use uma função que retorna o novo estado para atualizar
        atualiza((old) => ({
            ...old,
            ...atualizacao
        }));
    };
}
