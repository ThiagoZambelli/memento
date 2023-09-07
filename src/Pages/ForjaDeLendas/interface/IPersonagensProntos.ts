import IAntecedente from "interface/IAntecedente";
import IClasse from "interface/IClasse";
import IRaca from "interface/IRaca";

export default interface IPersonagensProntos {
    _id: string,
    nomePersonagem: string,
    nomeJogador: string,
    raca?: IRaca,
    classe?: IClasse,
    antecedente?: IAntecedente,
    atributos?: number[],
    img?: string,
    pericias?: string[],
    vinculo?: string,
    ideais?: string,
    fraqueza?: string,
    tracoDePersonalidade?: string
}