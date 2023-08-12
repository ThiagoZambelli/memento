import IHabilidade from "interface/IHabilidade";

export default interface IBannerItem{
    nome: string,
    descricao: string,
    habilidades?: IHabilidade[]
}