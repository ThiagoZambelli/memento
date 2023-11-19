import IPersonagensProntos from "Pages/ForjaDeLendas/interface/IPersonagensProntos";

export default function useComparaPericia(fichaEscolhida:IPersonagensProntos) {    

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
