import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useRecoilValue } from "recoil";

export default function useComparaPericia() {
    const fichaEscolhida = useRecoilValue(ficha);

    return (pericia: string) => {
        if (!fichaEscolhida.pericias || fichaEscolhida.pericias.length < 1) {
            return false
        } else {
            if(fichaEscolhida.pericias.includes(pericia)){
                return true
            } else {
                return false
            }
        }
    }
}
