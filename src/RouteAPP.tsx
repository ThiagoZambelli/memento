import Forja from "Pages/ForjaDeLendas/Forja/ForjaCriacao/Nomes";
import Antecedente from "Pages/ForjaDeLendas/Forja/ForjaCriacao/Antecedente";
import Classe from "Pages/ForjaDeLendas/Forja/ForjaCriacao/Classe";
import ForjaCriacao from "Pages/ForjaDeLendas/Forja/ForjaCriacao/ForjaCriacao";
import Racas from "Pages/ForjaDeLendas/Forja/ForjaCriacao/Racas";
import ForjaComum from "Pages/ForjaDeLendas/ForjaComum";
import ForjaHome from "Pages/ForjaDeLendas/ForjaHome";
import ForjaPersonagens from "Pages/ForjaDeLendas/ForjaPersonagens";
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
				<Route path="forja-de-lendas" element={<ForjaComum />}>
					<Route index element={<ForjaHome />} />
					<Route path="forja" element={<Forja />} />
					<Route path="personagens" element={<ForjaPersonagens />} />
				</Route>
				<Route path="forja/cricao" element={<ForjaCriacao />}>
					<Route path="raca" element={<Racas />}/>
					<Route path="antecedente" element={<Antecedente />}/>
					<Route path="classe" element={<Classe />}/>
				</Route>
			</Route>
		</Routes>
	);
}

export default RouteAPP;