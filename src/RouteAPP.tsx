import Antecedente from "Pages/ForjaDeLendas/Forja/Antecedente";
import Classe from "Pages/ForjaDeLendas/Forja/Classe";
import ForjaCriacao from "Pages/ForjaDeLendas/Forja/ForjaCriacao";
import Forja from "Pages/ForjaDeLendas/Forja/Nomes";
import Racas from "Pages/ForjaDeLendas/Forja/Racas";
import ForjaComum from "Pages/ForjaDeLendas/ForjaComum";
import ForjaHome from "Pages/ForjaDeLendas/ForjaHome";
import ForjaPersonagens from "Pages/ForjaDeLendas/ForjaPersonagens";
import Ficha from "Pages/ForjaDeLendas/ForjaPersonagens/Ficha";
import GoblinCaolho from "Pages/GoblinCaolho";
import Home from "Pages/Home";
import PaginaBase from "Pages/PaginaBase";
import PaginaErro from "Pages/PaginaErro";
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
					<Route path="ficha" element={<Ficha />} />
				</Route>
				<Route path="forja/cricao" element={<ForjaCriacao />}>
					<Route path="raca" element={<Racas />}/>
					<Route path="antecedente" element={<Antecedente />}/>
					<Route path="classe" element={<Classe />}/>
				</Route>
			</Route>
			<Route path="*" element={<PaginaErro />} />
		</Routes>
	);
}

export default RouteAPP;