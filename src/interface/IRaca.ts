import IHabilidade from "./IHabilidade";
import ISubRaca from "./ISubRaca";

export default interface IRaca {
    nome: string,
    descricao: string,
    habilidades: IHabilidade[]
    subRaca:ISubRaca[]
}