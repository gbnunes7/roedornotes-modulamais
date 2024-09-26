import CardDetail from "../../components/cardDetail";
import useApp from "../../hooks/useAppContext";

const RoedorDetail = () => {
	const { foundRodent } = useApp();

	if (!foundRodent) {
		return <p>Carregando...</p>;
	}

	return (
		<div className="bg-[#f8f8f5] rounded-lg p-4 w-full md:w-3/4 mx-auto m-8 shadow-2xl">
			<CardDetail
				status={foundRodent.status}
				comportamento={foundRodent.comportamento}
				dieta={foundRodent.dieta}
				especie={foundRodent.especie}
				habitat={foundRodent.habitat}
				idade={foundRodent.idade}
				nome={foundRodent.nome}
				observacao={foundRodent.observacao}
				peso={foundRodent.peso}
			/>
		</div>
	);
};

export default RoedorDetail;
