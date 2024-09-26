import CardRoedor from "../../components/cardRoedor";
import Title from "../../components/title";
import useApp from "../../hooks/useAppContext";

const Roedores = () => {
	const { data } = useApp();
	return (
		<div className="flex flex-col gap-4 bg-white p-4">
			<Title>Veja aqui seus roedores registrados.</Title>
			<p className="text-sm text-gray-600 text-center">(Clique em cima para interagir)</p>
			<ul className="flex flex-col gap-4 justify-center items-center w-full">
				{data.map((item) => (
					<li key={item.nome} className="flex justify-center w-full">
						<CardRoedor
							alt={`Foto da capivara ${item.nome}`}
							src="images/capivara.jpg"
							nome={item.nome}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Roedores;
