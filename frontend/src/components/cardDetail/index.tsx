import { MdDelete, MdEdit } from "react-icons/md";
import { rodentData } from "../../interface/rodent";
import useApp from "../../hooks/useAppContext";

const CardDetail: React.FC<rodentData> = ({
	nome,
	especie,
	idade,
	peso,
	status,
	habitat,
	comportamento,
	dieta,
	observacao,
}) => {
	const {
		onHandleDelete,
		isEditing,
		toggleEdit,
		editableData,
		setEditableData,
	} = useApp();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setEditableData({
			...editableData,
			[name]: value,
		});
	};

	return (
		<div className="flex flex-col md:flex-row">
			<img
				src="/images/capivara.jpg"
				className="rounded m-2 object-cover"
				alt="Imagem"
			/>
			<div className="flex flex-col gap-4 p-4">
				<span className="font-bold">
					Nome:{" "}
					{isEditing ? (
						<input
							type="text"
							name="nome"
							value={editableData.nome}
							onChange={handleChange}
							className="border"
						/>
					) : (
						nome
					)}
				</span>

				<span className="font-bold">
					Espécie:{" "}
					{isEditing ? (
						<input
							type="text"
							name="especie"
							value={editableData.especie}
							onChange={handleChange}
							className="border"
						/>
					) : (
						especie
					)}
				</span>

				<span className="font-bold">
					Idade:{" "}
					{isEditing ? (
						<input
							type="number"
							name="idade"
							value={editableData.idade}
							onChange={handleChange}
							className="border"
						/>
					) : (
						idade
					)}
				</span>

				<span className="font-bold">
					Peso:{" "}
					{isEditing ? (
						<input
							type="number"
							name="peso"
							value={editableData.peso}
							onChange={handleChange}
							className="border"
						/>
					) : (
						peso
					)}
				</span>

				<span className="font-bold">
					Status:{" "}
					{isEditing ? (
						<input
							type="text"
							name="status"
							value={editableData.status}
							onChange={handleChange}
							className="border"
						/>
					) : (
						status
					)}
				</span>

				<span className="font-bold">
					Habitat:{" "}
					{isEditing ? (
						<input
							type="text"
							name="habitat"
							value={editableData.habitat}
							onChange={handleChange}
							className="border"
						/>
					) : (
						habitat
					)}
				</span>

				<span className="font-bold">
					Comportamento:{" "}
					{isEditing ? (
						<input
							type="text"
							name="comportamento"
							value={editableData.comportamento}
							onChange={handleChange}
							className="border"
						/>
					) : (
						comportamento
					)}
				</span>

				<span className="font-bold">
					Dieta:{" "}
					{isEditing ? (
						<input
							type="text"
							name="dieta"
							value={editableData.dieta}
							onChange={handleChange}
							className="border"
						/>
					) : (
						dieta
					)}
				</span>

				<span className="font-bold">
					Observação:{" "}
					{isEditing ? (
						<input
							type="text"
							name="observacao"
							value={editableData.observacao}
							onChange={handleChange}
							className="border"
						/>
					) : (
						observacao
					)}
				</span>

				<div className="flex mt-16">
					<button onClick={toggleEdit}>
						<MdEdit className="text-3xl" />
					</button>

					<button onClick={onHandleDelete}>
						<MdDelete className="text-3xl" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
