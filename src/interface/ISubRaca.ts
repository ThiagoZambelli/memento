import IHabilidade from "./IHabilidade";

export default interface ISubRaca {
    _id:string,
    nome: string,
    descricao: string,
    habilidades: IHabilidade[]
}