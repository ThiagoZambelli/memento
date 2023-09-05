import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function useSetaPericia() {
    const fichaEscolhida = useRecoilValue(ficha);
    const setPericias = useSetRecoilState(ficha);
    let pericias = [...fichaEscolhida.pericias || []]

    return (pericia: string) => {
        if (pericias.includes(pericia)) {
            const index: number = pericias.indexOf(pericia);
            pericias.splice(index, 1);

            return setPericias((prevState) => ({
                ...prevState, // Copia o estado anterior
                pericias: pericias, // Atualiza o array de perícias
            }))
        } else {
            pericias.push(pericia);
            return setPericias((prevState) => ({
                ...prevState, // Copia o estado anterior
                pericias: pericias, // Atualiza o array de perícias
            }))
        }
    }
}