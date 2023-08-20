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
export const userLogado = atom<string>({
	key: "userLogado",
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

