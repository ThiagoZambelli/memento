import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalUrl } from "state/atom";

export default function useAbreModalUrl() {
	const estado = useRecoilValue(modalUrl);
	const mudaEstado = useSetRecoilState(modalUrl);

	return () => mudaEstado(!estado);
}