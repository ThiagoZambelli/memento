import IHabilidade from "./IHabilidade";

export default interface IClasse {
  _id: string,
  nome: string,
  descricao: string,
  dadoVida: number,
  armaduraProf: string,
  armaProf: string,
  testeResistencia: string[],
  listaPericias: string,
  habilidades: IHabilidade[],
}