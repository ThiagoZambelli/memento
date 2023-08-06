import { useRecoilValue } from "recoil";
import { sideBar } from "state/atom";

export default function useEstadoSideBar() {
	const estadoSideBar = useRecoilValue(sideBar);

	return estadoSideBar;
}

