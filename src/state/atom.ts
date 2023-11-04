import IComentario from "interface/IComentario";
import IHabilidade from "interface/IHabilidade";
import IPersonagem from "interface/IPersonagem";
import { atom } from "recoil";

export const sideBar = atom<boolean>({
	key: "sideBar",
	default: false
});
export const modalLogin = atom<boolean>({
	key: "modalLogin",
	default: false
});
export const modalCadastro = atom<boolean>({
	key: "modalCadastro",
	default: false
});

export const logado = atom<boolean>({
	key: "logado",
	default: false
});
export const nomeUserserLogado = atom<string>({
	key: "nomeUserserLogado",
	default: ''
});
export const idUserserLogado = atom<string>({
	key: "idUserserLogado",
	default: ''
});
export const personagemCriacao = atom<IPersonagem>({
	key: "personagemCriacao",
	default: {		
		nomePersonagem: '',
		nomeJogador: '',
		raca: '',
		classe: '',
		antecedente: ''
	}
});
export const habilidadesFicha = atom<IHabilidade[]>({
	key: "habilidadesFicha",
	default: []
});
export const comentarios = atom<IComentario[]>({
	key: "comentarios",
	default: []
});


