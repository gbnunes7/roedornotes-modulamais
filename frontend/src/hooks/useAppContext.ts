import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useApp = () => {
	const {
		data,
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
		setEspecie,
		setIdade,
		setPeso,
		setStatus,
		setHabitat,
		setComportamento,
		setDieta,
		setObservacao,
	} = useContext(AppContext)!;

	const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newRegister = {
			nome,
			idade,
			status,
			especie,
			comportamento,
			observacao,
			peso,
			habitat,
			dieta,
		};

		console.log(newRegister);
		onHandleClear();
	};

	const onHandleClear = () => {
		if (
			!nome &&
			!especie &&
			!idade &&
			!peso &&
			!status &&
			!habitat &&
			!comportamento &&
			!dieta &&
			!observacao
		) {
			alert("Não há nada pra apagar.");
		}
		setNome("");
		setEspecie("");
		setIdade("");
		setPeso("");
		setStatus("");
		setHabitat("");
		setComportamento("");
		setDieta("");
		setObservacao("");
	};

	return {
		data,
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
		setEspecie,
		setIdade,
		setPeso,
		setStatus,
		setHabitat,
		setComportamento,
		setDieta,
		setObservacao,
		onHandleSubmit,
		onHandleClear,
	};
};

export default useApp;
