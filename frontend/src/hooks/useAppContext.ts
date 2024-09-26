import { useContext } from "react";
import { AppContext } from "../context/appContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
		setData,
	} = useContext(AppContext)!;

	const API_URL = "http://localhost:8080/roedores";
	const navigate = useNavigate();

	const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

		onHandleClear();

		try {
			await axios.post(API_URL, newRegister);
			setData([...data, newRegister]);
			navigate("/view");
			console.log("Feito novo registro.");
		} catch (err) {
			console.error(err);
		}
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
