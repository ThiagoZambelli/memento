import { useRecoilValue } from "recoil";
import { modalCadastro } from "state/atom";

export default function useEstadoModalCadastro() {
	const estado = useRecoilValue(modalCadastro);
	return estado;
}