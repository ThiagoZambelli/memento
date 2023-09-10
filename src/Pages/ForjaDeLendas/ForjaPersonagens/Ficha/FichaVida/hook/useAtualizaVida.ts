import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useSetRecoilState } from "recoil";

export default function useAtualizaVida() {
    const atualizaFicha = useSetRecoilState(ficha);

    return (vida: number) => {
        return atualizaFicha((fichaAntiga) => ({
            ...fichaAntiga,
            vida: vida
        }))
    }
}