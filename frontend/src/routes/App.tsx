import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "../context/appContext";
import Catalogar from "../pages/catalogar";
import Home from "../pages/home";
import Roedores from "../pages/roedores";
import FixedLayout from "../components/fixedLayout";

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<AppProvider>
					<Routes>
						<Route path="/" element={<FixedLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/registrar" element={<Catalogar />} />
							<Route path="/view" element={<Roedores />} />
						</Route>
					</Routes>
				</AppProvider>
			</BrowserRouter>
		</>
	);
}
export default AppRoutes;
