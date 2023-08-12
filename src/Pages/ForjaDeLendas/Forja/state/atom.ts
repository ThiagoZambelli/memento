import { atom } from "recoil";
import IBannerItem from "../ForjaCriacao/interface/IBannerItem";

export const bannerMostrado = atom<IBannerItem>({
    key: "bannerMostrado",
    default: {
        nome: 'sdasd',
        descricao: 'dasd'
    }
});
