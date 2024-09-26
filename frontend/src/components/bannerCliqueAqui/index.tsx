import useApp from "../../hooks/useAppContext";
import Button from "../button";

const BannerCliqueAqui = () => {
	const { navigate } = useApp();
	return (
		<div className="bg-blue-200 w-full mt-16 md:max-h-[140px] flex flex-col p-8 gap-6 items-center">
			<p className="font-semibold text-xl">
				Clique aqui para começar a catalogar seus roedores favoritos!
			</p>
			<Button
				onclick={() => navigate("/registrar")}
				background="transparent"
				color="black"
			>
				Catalogar
			</Button>
		</div>
	);
};

export default BannerCliqueAqui;
