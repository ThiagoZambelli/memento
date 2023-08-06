import React from "react";
import "./styles/_CSSBase.module.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RouteAPP from "./RouteAPP";



const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<RouteAPP/>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);


