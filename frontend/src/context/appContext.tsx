import { createContext, useEffect, useState } from "react";
import { isAChild } from "../interface/children";
import { rodentData } from "../interface/rodent";
import axios from "axios";
import { contextType } from "../interface/contextType";

export const AppContext = createContext<contextType | null>(null);

const AppProvider: React.FC<isAChild> = ({ children }) => {
	const [data, setData] = useState<rodentData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("http://localhost:8080/roedores");
				setData(res.data);
			} catch (err: any) {
				console.error(err.message);
			}
		};
		fetchData();
	}, [setData, data]);

	return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export default AppProvider;
