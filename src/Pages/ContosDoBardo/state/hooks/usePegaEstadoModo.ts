import { useRecoilValue } from "recoil";
import { modoClaro } from "../atom";

export default function usePegaEstadoModo() {
    const estado = useRecoilValue(modoClaro);

    return estado;
}