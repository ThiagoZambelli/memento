import { useRecoilValue, useSetRecoilState } from "recoil";
import { sideBar } from "state/atom";

export default function useAtivaSideBar() {
	const estadoSideBar = useRecoilValue(sideBar);
	const mudaEstado = useSetRecoilState(sideBar);

	return () => {
		mudaEstado(!estadoSideBar);
	};
}
