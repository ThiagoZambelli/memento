import IHabilidade from "./IHabilidade";

export default interface ISubRaca {
    nome: string,
    descricao: string,
    habilidades: IHabilidade[]
}