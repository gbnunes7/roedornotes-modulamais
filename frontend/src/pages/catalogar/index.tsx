import Button from "../../components/button";
import Input from "../../components/input";
import Title from "../../components/title";
import useApp from "../../hooks/useAppContext";

const Catalogar = () => {
	const {
		nome,
		setNome,
		especie,
		setEspecie,
		idade,
		setIdade,
		comportamento,
		setComportamento,
		dieta,
		setDieta,
		habitat,
		setHabitat,
		observacao,
		setObservacao,
		peso,
		setPeso,
		status,
		setStatus,
		onHandleSubmit,
		onHandleClear
	} = useApp();

	return (
		<div className="flex items-center justify-center">
			<form
				onSubmit={onHandleSubmit}
				className="bg-[#f8f8f5] md:grid md:grid-cols-2 md:p-16 md:gap-8 md:w-3/4 flex flex-col gap-6 w-full p-6 rounded-lg shadow-2xl shadow-gray-500 mx-6 my-4"
			>
				<div className="col-span-full">
					<Title>Adicione aqui seu roedor favorito!</Title>
				</div>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Nome
					<Input
						type="text"
						value={nome}
						onchange={(e) => {
							setNome(e.target.value);
						}}
						placeholder="Digite o nome do roedor..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Espécie
					<Input
						type="text"
						value={especie}
						placeholder="Digite o nome da espécie..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setEspecie(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Idade
					<Input
						type="text"
						value={idade}
						placeholder="Digite a idade do roedor..."
						pattern="[0-9.,]+"
						minlength={1}
						maxlength={30}
						onchange={(e) => {
							setIdade(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Peso
					<Input
						type="text"
						value={peso}
						placeholder="Digite o peso do roedor..."
						pattern="[0-9.,]+"
						minlength={1}
						maxlength={30}
						onchange={(e) => {
							setPeso(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Status
					<Input
						type="text"
						value={status}
						placeholder="Digite o status..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setStatus(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Habitat
					<Input
						type="text"
						value={habitat}
						placeholder="Digite o habitat..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setHabitat(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Comportamento
					<Input
						type="text"
						value={comportamento}
						placeholder="Digite o comportamento..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setComportamento(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Dieta
					<Input
						type="text"
						value={dieta}
						placeholder="Digite a dieta..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setDieta(e.target.value);
						}}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Observação
					<Input
						type="text"
						value={observacao}
						placeholder="Digite alguma observação, caso não tenha, escrever N/A..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
						onchange={(e) => {
							setObservacao(e.target.value);
						}}
					/>
				</label>
				<div className="flex gap-2 justify-center items-center md:col-span-full md:mt-4 md:gap-8">
					<Button type="submit" background="#041832" color="white">
						Adicionar
					</Button>
					<Button type="button" onclick={onHandleClear} background="transparent" color="black">
						Limpar
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Catalogar;
