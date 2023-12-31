import Carregamento from "Components/Carregamento";
import LandingPage from "Pages/LandingPage";
import PaginaBase from "Pages/PaginaBase";
import PaginaErro from "Pages/PaginaErro";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";



const Antecedente = lazy(() => import('Pages/ForjaDeLendas/Forja/Antecedente'));
const Perfil = lazy(() => import('Pages/Perfil'));
const Classe = lazy(() => import('Pages/ForjaDeLendas/Forja/Classe'));
const ForjaCriacao = lazy(() => import('Pages/ForjaDeLendas/Forja/ForjaCriacao'));
const Forja = lazy(() => import('Pages/ForjaDeLendas/Forja/Nomes'));
const Racas = lazy(() => import('Pages/ForjaDeLendas/Forja/Racas'));
const ForjaComum = lazy(() => import('Pages/ForjaDeLendas/ForjaComum'));
const ForjaHome = lazy(() => import('Pages/ForjaDeLendas/ForjaHome'));
const ForjaPersonagens = lazy(() => import('Pages/ForjaDeLendas/ForjaPersonagens'));
const Ficha = lazy(() => import('Pages/ForjaDeLendas/ForjaPersonagens/Ficha'));
const ContosDoBardo = lazy(() => import('Pages/ContosDoBardo'));
const ContosHome = lazy(() => import('Pages/ContosDoBardo/ContosHome'));
const ContosFavoritos = lazy(() => import('Pages/ContosDoBardo/ContosFavoritos'));
const ContoDescricao = lazy(() => import('Pages/ContosDoBardo/ContoDescricao'));
const FichaPronta = lazy(() => import('Pages/FichaPronta/Index'));
const Home = lazy(() => import('Pages/Home'));

function RouteAPP() {
	return (
		<Suspense fallback={<Carregamento />}>
			<Routes>
				<Route path="/" element={<PaginaBase />}>
					<Route index element={<LandingPage />} />
					<Route path="perfil"element={<Perfil />} />
					<Route path="news" element={<Home />} />
					<Route path="contos-do-bardo" element={<ContosDoBardo  />}>
						<Route index element={<ContosHome />} />
						<Route path="favoritos" element={<ContosFavoritos />} />
						<Route path="descricao/:id" element={<ContoDescricao />} />
					</Route>
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
				<Route path="/ficha/:id" element={<FichaPronta />} />	
			</Routes>
		</Suspense>
	);
}

export default RouteAPP;