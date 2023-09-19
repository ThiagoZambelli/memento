import Carregamento from "Components/Carregamento";
import PaginaBase from "Pages/PaginaBase";
import Home from "Pages/Home";


// import Antecedente from "Pages/ForjaDeLendas/Forja/Antecedente";
// import Classe from "Pages/ForjaDeLendas/Forja/Classe";
// import ForjaCriacao from "Pages/ForjaDeLendas/Forja/ForjaCriacao";
// import Forja from "Pages/ForjaDeLendas/Forja/Nomes";
// import Racas from "Pages/ForjaDeLendas/Forja/Racas";
// import ForjaComum from "Pages/ForjaDeLendas/ForjaComum";
// import ForjaHome from "Pages/ForjaDeLendas/ForjaHome";
// import ForjaPersonagens from "Pages/ForjaDeLendas/ForjaPersonagens";
// import Ficha from "Pages/ForjaDeLendas/ForjaPersonagens/Ficha";
import PaginaErro from "Pages/PaginaErro";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Antecedente = lazy(() => import('Pages/ForjaDeLendas/Forja/Antecedente'));
const Classe = lazy(() => import('Pages/ForjaDeLendas/Forja/Classe'));
const ForjaCriacao = lazy(() => import('Pages/ForjaDeLendas/Forja/ForjaCriacao'));
const Forja = lazy(() => import('Pages/ForjaDeLendas/Forja/Nomes'));
const Racas = lazy(() => import('Pages/ForjaDeLendas/Forja/Racas'));
const ForjaComum = lazy(() => import('Pages/ForjaDeLendas/ForjaComum'));
const ForjaHome = lazy(() => import('Pages/ForjaDeLendas/ForjaHome'));
const ForjaPersonagens = lazy(() => import('Pages/ForjaDeLendas/ForjaPersonagens'));
const Ficha = lazy(() => import('Pages/ForjaDeLendas/ForjaPersonagens/Ficha'));
const GoblinCaolho = lazy(() => import('Pages/GoblinCaolho'));
const ContosDoBardo = lazy(() => import('Pages/ContosDoBardo'));

function RouteAPP() {
	return (
		<Suspense fallback={<Carregamento />}>
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<Home />} />
					<Route path="goblin-caolho" element={<GoblinCaolho />} />
					<Route path="contos-do-bardo" element={<ContosDoBardo  />} />
					<Route path="forja-de-lendas" element={<ForjaComum />}>
						<Route index element={<ForjaHome />} />
						<Route path="forja" element={<Forja />} />
						<Route path="personagens" element={<ForjaPersonagens />} />
						<Route path="ficha" element={<Ficha />} />
					</Route>
					<Route path="forja/cricao" element={<ForjaCriacao />}>
						<Route path="raca" element={<Racas />} />
						<Route path="antecedente" element={<Antecedente />} />
						<Route path="classe" element={<Classe />} />
					</Route>
				</Route>
				<Route path="*" element={<PaginaErro />} />
			</Routes>
		</Suspense>
	);
}

export default RouteAPP;