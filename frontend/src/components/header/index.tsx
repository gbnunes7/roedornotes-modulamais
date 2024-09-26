import { IoIosMenu } from "react-icons/io";

const Header = () => {
	return (
		<header className="bg-blue-200 px-2 max-h-[120px] md:justify-between md:px-20 flex items-center justify-evenly gap-24 shadow shadow-black">
			<img
				src="/images/roedorNotes.png"
				alt="Imagem da logo"
				className="max-w-[200px]"
			/>
			<button>
				<IoIosMenu className="text-4xl bg-blue-200 rounded p-[2px]" />
			</button>
		</header>
	);
};

export default Header;
