import { Link } from "react-router-dom";
import CardRoedor from "../../components/cardRoedor";
import Title from "../../components/title";
import useApp from "../../hooks/useAppContext";
import Input from "../../components/input";
import { CiSearch } from "react-icons/ci";

const Roedores = () => {
	const { data, setFilteredWord, filteredWord, onHandleFilter,error } = useApp();
	return (
		<div className="flex flex-col gap-4 bg-white p-4">
			<Title>Veja aqui seus roedores registrados.</Title>
			<p className="text-sm text-gray-600 text-center">
				(Clique em cima para interagir)
			</p>

			<div className="bg-[#f8f8f5] rounded-lg p-4 w-full md:w-3/4 mx-auto shadow-2xl shadow-gray-500">
				<Input
					type="text"
					onchange={(e) => setFilteredWord(e.target.value)} // Atualiza o estado do filtro
					value={filteredWord}
					placeholder="Digite o habitat"
					pattern="/^[a-zA-Z\s]*$/"
				/>
				<button
					onClick={onHandleFilter}
					className="relative right-[25px] top-[3px] text-blue-700"
				>
					<CiSearch />
				</button>
				<div className="text-sm text-red-500">{error}</div>
				<ul className="flex flex-col md:grid md:grid-cols-3 md:gap-8 gap-4 justify-center items-center w-full md:w-4/4 md:p-8">
					{data.map((item) => (
						<li key={Math.random()} className="flex justify-center w-full ">
							<Link to={`/roedores/id/${item.id}`}>
								<CardRoedor
									alt={`Foto da capivara ${item.nome}`}
									src="images/capivara.jpg"
									nome={item.nome}
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Roedores;
