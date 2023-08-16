import { useRecoilValue } from "recoil";
import { bannerMostrado } from "../atom";

export default function useBannerMostrado() {
    const banner = useRecoilValue(bannerMostrado);
    return banner;
}