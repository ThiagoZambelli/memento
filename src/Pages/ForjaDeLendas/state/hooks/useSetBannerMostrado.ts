import { useSetRecoilState } from "recoil";
import { bannerMostrado } from "../atom";
import IBannerItem from "Pages/ForjaDeLendas/Forja/ForjaCriacao/interface/IBannerItem";


export default function useSetBannerMostrado() {
    const banner = useSetRecoilState(bannerMostrado);
    
    return (novo: IBannerItem) => {
        banner(novo)
    }
}