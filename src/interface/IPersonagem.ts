import IHabilidade from "./IHabilidade";

export default interface IPersonagem {
    _id?:string,
    nomePersonagem: string,
    nomeJogador: string,
    raca: string,
    classe: string,
    antecedente: string,
    atributos?: number[],
    subRaca?:{
        nome:string,
        descricao: string,
        habilidades:IHabilidade[]
    }
}