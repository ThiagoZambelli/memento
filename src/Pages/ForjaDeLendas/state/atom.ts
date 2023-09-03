import { atom } from "recoil";
import IBannerItem from "../interface/IBannerItem";
import IPersonagensProntos from "../interface/IPersonagensProntos";

export const bannerMostrado = atom<IBannerItem>({
    key: "bannerMostrado",
    default: {
        nome: 'sdasd',
        descricao: 'dasd',
        _id: ''
    }
});
export const ficha = atom<IPersonagensProntos>({
    key: "ficha",
    default: {        
        _id: '',
        nomePersonagem: '',
        nomeJogador: '',        
    }
});