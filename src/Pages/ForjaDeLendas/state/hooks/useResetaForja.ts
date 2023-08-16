import useSetBannerMostrado from "./useSetBannerMostrado";

export default function useResetaForja() {
    const resetaBanner = useSetBannerMostrado();


    return () => {
        resetaBanner({
            nome: '',
            descricao: '',
            _id:'',
            habilidades:[],
            subRaca:[]
        })
    }
}