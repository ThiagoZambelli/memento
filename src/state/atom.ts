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
export const personagemCriacao = atom<IPersonagem>({
	key: "personagemCriacao",
	default: {
		_id:'',
		nomePersonagem: '',
		nomeJogador: '',
		raca: '',
		classe: '',
		antecedente: ''
	}
});

