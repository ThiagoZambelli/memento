import { useSetRecoilState } from "recoil";
import useEstadoModalLogin from "./useEstadoModalLogin";
import { modalLogin } from "state/atom";

export default function useAbreModalLogin() {
	const estado = useEstadoModalLogin();
	const mudaEstado = useSetRecoilState(modalLogin);

	return () => mudaEstado(!estado);
}