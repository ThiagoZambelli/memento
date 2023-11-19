import { ficha } from "Pages/ForjaDeLendas/state/atom";
import { useRecoilValue } from "recoil";

export default function usePegaQualTexto() {
    const fichaEscolhida = useRecoilValue(ficha); 

    return (busca:string) => {
        if(busca === 'tracoDePersonalidade'){
            return fichaEscolhida.tracoDePersonalidade || ''
        } else if(busca === 'ideais'){
            return fichaEscolhida.ideais || ''
        } else if(busca === 'vinculo'){
            return fichaEscolhida.vinculo || ''
        } else if(busca === 'fraqueza'){
            return fichaEscolhida.fraqueza || ''
        }
    }
}