import CardRoedor from "../../components/cardRoedor";
import Title from "../../components/title";
import useApp from "../../hooks/useAppContext";

const Roedores = () => {
	const { data } = useApp();
	return (
		<div className="flex flex-col gap-4 bg-white p-4">
			<Title>Veja aqui seus roedores registrados.</Title>
			<p className="text-sm text-gray-600 text-center">
				(Clique em cima para interagir)
			</p>

			<div className="bg-[#f8f8f5] rounded-lg p-4 w-full md:w-3/4 mx-auto shadow-2xl shadow-gray-500">
				<ul className="flex flex-col md:grid md:grid-cols-3 md:gap-8 gap-4 justify-center items-center w-full md:w-4/4 md:p-8">
					{data.map((item) => (
						<li key={item.nome} className="flex justify-center w-full ">
							<CardRoedor
								alt={`Foto da capivara ${item.nome}`}
								src="images/capivara.jpg"
								nome={item.nome}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Roedores;
