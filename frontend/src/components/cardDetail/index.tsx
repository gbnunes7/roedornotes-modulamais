import { MdDelete, MdEdit } from "react-icons/md";
import { rodentData } from "../../interface/rodent";

const CardDetail:React.FC<rodentData> = ({nome, especie, idade, peso, status, habitat, comportamento, dieta, observacao}) => {
	return (
		<div className="flex flex-col md:flex-row">
			<img
				src="/images/capivara.jpg"
				className="rounded m-2 object-cover"
				alt="Imagem"
			/>
			<div className="flex flex-col gap-4 p-4">
				<span className="font-bold">Nome: {nome}</span>
				<span className="font-bold">Especie: {especie}</span>
				<span className="font-bold">Idade: {idade}</span>
				<span className="font-bold">Peso: {peso}</span>
				<span className="font-bold">Status: {status}</span>
				<span className="font-bold">Habitat: {habitat}</span>
				<span className="font-bold">Comportamento: {comportamento}</span>
				<span className="font-bold">Dieta: {dieta}</span>
				<span className="font-bold">Observação: {observacao}</span>
				<div className="flex mt-16">
					<button>
						<MdEdit className="text-3xl" />
					</button>

					<button>
						<MdDelete className="text-3xl" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
