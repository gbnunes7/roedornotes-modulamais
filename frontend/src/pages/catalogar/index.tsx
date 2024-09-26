import Button from "../../components/button";
import Input from "../../components/input/intex";
import Title from "../../components/title";

const Catalogar = () => {
	return (
		<div className="flex items-center justify-center">
			<form className="bg-[#f8f8f5] flex flex-col gap-6 w-full max-w-lg p-6 rounded-lg shadow-2xl shadow-gray-500 mx-6 my-4">
                <Title>Adicione aqui seu roedor favorito!</Title>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Nome
					<Input
						type="text"
						value=""
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
						value=""
						placeholder="Digite o nome da espécie..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Idade
					<Input
						type="text"
						value=""
						placeholder="Digite a idade do roedor..."
						pattern="[0-9.,]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Peso
					<Input
						type="text"
						value=""
						placeholder="Digite o peso do roedor..."
						pattern="[0-9.,]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Status
					<Input
						type="text"
						value=""
						placeholder="Digite o status..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Habitat
					<Input
						type="text"
						value=""
						placeholder="Digite o habitat..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Comportamento
					<Input
						type="text"
						value=""
						placeholder="Digite o comportamento..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Dieta
					<Input
						type="text"
						value=""
						placeholder="Digite a dieta..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
				<label htmlFor="" className="flex flex-col gap-2 text-gray-700">
					Observação
					<Input
						type="text"
						value=""
						placeholder="Digite alguma observação, caso não tenha escrever N/A..."
						pattern="[A-Za-zÀ-ÿ\s]+"
						minlength={3}
						maxlength={30}
					/>
				</label>
                <div className="flex gap-2">
                    <Button background="#041832" color="white">
                        Adicionar
                    </Button>
                    <Button background="transparent" color="black">
                        Limpar
                    </Button>
                </div>
			</form>
		</div>
	);
};

export default Catalogar;

// nome: string;
// 	especie: string;
// 	idade: Number;
// 	peso: Number;
// 	status: string;
// 	habitat: string;
// 	comportamento: string;
// 	dieta: string;
// 	observacao: string;
