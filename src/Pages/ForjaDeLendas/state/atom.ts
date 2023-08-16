import { atom } from "recoil";
import IBannerItem from "../Forja/ForjaCriacao/interface/IBannerItem";


export const bannerMostrado = atom<IBannerItem>({
    key: "bannerMostrado",
    default: {
        nome: 'sdasd',
        descricao: 'dasd',
        _id: ''
    }
});