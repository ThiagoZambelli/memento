import ForjaDeLendas from "Pages/ForjaDeLendas";
import GoblinCaolho from "Pages/GoblinCaolho";
import Home from "Pages/Home";
import PaginaBase from "Pages/PaginaBase";
import React from "react";
import { Route, Routes } from "react-router-dom";

function RouteAPP() {
	return (
		<Routes>
			<Route path="/" element={<PaginaBase />}>
				<Route index element={<Home />} />
				<Route path="goblin-caolho" element={<GoblinCaolho />} />
				<Route path="forja-de-lendas" element={<ForjaDeLendas />} />
			</Route>
		</Routes>
	);
}

export default RouteAPP;