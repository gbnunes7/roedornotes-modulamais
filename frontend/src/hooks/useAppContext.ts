import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useApp = () => {
	const { data } = useContext(AppContext)!;

	return {
		data,
	};
};

export default useApp;
