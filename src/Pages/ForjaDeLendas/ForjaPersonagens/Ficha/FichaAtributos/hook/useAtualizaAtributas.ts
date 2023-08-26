import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useSetRecoilState } from "recoil";

export default function useAtualizaAtributos() {
    const atualia = useSetRecoilState(ficha);

    return (atributos: number[]) => {
        return atualia((fichaAntiga) => ({
            ...fichaAntiga,
            atributos: atributos
        }))
    }
}