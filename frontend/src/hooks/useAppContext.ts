import { useContext, useEffect } from "react";
import { AppContext } from "../context/appContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
		foundRodent,
		setFoundRodent,
		isEditing,
		setIsEditing,
		editableData,
		setEditableData,
		isOpen,
		setIsOpen,
	} = useContext(AppContext)!;

	const API_URL = "http://localhost:8080/roedores";
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchRodent = async () => {
			try {
				console.log("Fetch rodent", id);
				const res = await axios.get(API_URL + `/id/${id}`);
				setFoundRodent(res.data);
			} catch (error) {
				console.error("Erro ao buscar roedor:", error);
			}
		};
		if (id) {
			fetchRodent();
		}
	}, [id]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleEdit = async () => {
		setIsEditing(!isEditing);
	};

	const onHandleDelete = async () => {
		try {
			await axios.delete(API_URL + `/id/${id}`);
			const newRes = await axios.get(API_URL);
			setData(newRes.data);
			navigate("/roedores");
		} catch (err: any) {
			console.error(err);
		}
	};

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
			navigate("/roedores");
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
		isEditing,
		observacao,
		foundRodent,
		setNome,
		setEspecie,
		setIdade,
		setPeso,
		setStatus,
		editableData,
		setEditableData,
		setHabitat,
		setComportamento,
		setDieta,
		setObservacao,
		onHandleSubmit,
		onHandleClear,
		onHandleDelete,
		navigate,
		toggleEdit,
		toggleMenu,
		isOpen,
	};
};

export default useApp;
