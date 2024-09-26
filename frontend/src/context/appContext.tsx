import { createContext, useEffect, useState } from "react";
import { isAChild } from "../interface/children";
import {
	ComportamentoRodent,
	DietaRodent,
	EspecieRodent,
	HabitatRodent,
	IdadeRodent,
	NomeRodent,
	ObservacaoRodent,
	PesoRodent,
	rodentData,
	StatusRodent,
} from "../interface/rodent";
import axios from "axios";
import { contextType } from "../interface/contextType";

export const AppContext = createContext<contextType | null>(null);

const AppProvider: React.FC<isAChild> = ({ children }) => {
	const [data, setData] = useState<rodentData[]>([]);
	const [nome, setNome] = useState<NomeRodent>("");
	const [especie, setEspecie] = useState<EspecieRodent>("");
	const [idade, setIdade] = useState<IdadeRodent>("");
	const [peso, setPeso] = useState<PesoRodent>("");
	const [status, setStatus] = useState<StatusRodent>("");
	const [habitat, setHabitat] = useState<HabitatRodent>("");
	const [comportamento, setComportamento] = useState<ComportamentoRodent>("");
	const [dieta, setDieta] = useState<DietaRodent>("");
	const [foundRodent, setFoundRodent] = useState<rodentData | null>(null);
	const [observacao, setObservacao] = useState<ObservacaoRodent>("");
	const [isEditing, setIsEditing] = useState(false);
	const [editableData, setEditableData] = useState({
		nome,
		especie,
		idade,
		peso,
		status,
		habitat,
		comportamento,
		dieta,
		observacao,
	});
	const [isOpen, setIsOpen] = useState(false);
	const [filteredWord, setFilteredWord] = useState("");
	const [error, setError] = useState("");

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
	}, []);

	return (
		<AppContext.Provider
			value={{
				data,
				foundRodent,
				isEditing,
				error,
				setError,
				filteredWord,
				setFilteredWord,
				setIsEditing,
				setFoundRodent,
				editableData,
				setEditableData,
				nome,
				especie,
				idade,
				peso,
				status,
				habitat,
				comportamento,
				dieta,
				observacao,
				setNome,
				setData,
				setEspecie,
				setIdade,
				setPeso,
				setStatus,
				setHabitat,
				setComportamento,
				setDieta,
				isOpen,
				setIsOpen,
				setObservacao,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
