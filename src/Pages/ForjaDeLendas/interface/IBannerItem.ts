import IHabilidade from "interface/IHabilidade";
import ISubRaca from "interface/ISubRaca";

export default interface IBannerItem {
    nome: string,
    descricao: string,
    habilidades?: IHabilidade[],
    subRaca?: ISubRaca[],
    _id: string,
    dadoVida?: number,
    armaduraProf?: string,
    armaProf?: string,
    testeResistencia?: string[],
    listaPericias?: string,
    tipo?: "classe" | "antecedete"
}