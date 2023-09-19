import {useSetRecoilState } from "recoil";
import { modoClaro } from "../atom";

export default function useSetaEstadoModo() {    
    const mudaEstado = useSetRecoilState(modoClaro);

    return (estado: boolean) => {
        mudaEstado(estado);   
    } 
}