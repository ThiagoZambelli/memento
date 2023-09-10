import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useRecoilValue } from "recoil";

export default function useGeraProeficiencia() {
    const lvl = useRecoilValue(ficha).lvl;

    if (lvl! <= 4) {
        return 2
    } else if (lvl! >= 5 && lvl! <= 8) {
        return 3
    } else if (lvl! >= 9 && lvl! <= 12) {
        return 4
    } else if (lvl! >= 13 && lvl! <= 16) {
        return 5
    } else if (lvl! <= 17) {
        return 6
    }

}