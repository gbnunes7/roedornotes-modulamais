import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
