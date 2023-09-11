import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useSetRecoilState } from "recoil";

export default function useAtualizaLvl() {
    const atualizaFicha = useSetRecoilState(ficha);

    return (lvl: number) => {
        return atualizaFicha((fichaAntiga) => ({
            ...fichaAntiga,
            lvl: lvl
        }))
    }
}