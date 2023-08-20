import React from "react";
import "./styles/_CSSBase.module.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RouteAPP from "./RouteAPP";
import ScrollToTop from "Components/ScrollToTop";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<RecoilRoot>
				<RouteAPP />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);


