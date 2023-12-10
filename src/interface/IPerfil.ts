import IPersonagensProntos from "Pages/ForjaDeLendas/interface/IPersonagensProntos";
import IConto from "./IConto";

export default interface IPerfil {
    id: string,
    nome: string,
    email: string,      
    itensFavoritos?: string[],
    contosFavoritos?: IConto[],
    personagens?: IPersonagensProntos[],
    // 
    endereco?: string,
    cep?: string,
    complemento?: string
}