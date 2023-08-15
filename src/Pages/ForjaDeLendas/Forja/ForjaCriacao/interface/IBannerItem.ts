import IHabilidade from "interface/IHabilidade";
import ISubRaca from "interface/ISubRaca";

export default interface IBannerItem {
    nome: string,
    descricao: string,
    habilidades?: IHabilidade[],
    subRaca?: ISubRaca[],
    _id: string
}