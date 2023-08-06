import { useRecoilValue } from "recoil";
import { modalLogin } from "state/atom";

export default function useEstadoModalLogin() {
	const estado = useRecoilValue(modalLogin);
	return estado;
}