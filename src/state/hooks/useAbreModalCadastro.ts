import { useSetRecoilState } from "recoil";
import { modalCadastro } from "state/atom";
import useEstadoModalCadastro from "./useEstadoModalCadastro";

export default function useAbreModalCadastro() {
	const estado = useEstadoModalCadastro();
	const mudaEstado = useSetRecoilState(modalCadastro);

	return () => mudaEstado(!estado);
}