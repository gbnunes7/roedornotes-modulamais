import HamburgerMenu from "../menuHamburguer";

const Header = () => {
	return (
		<header className="bg-blue-200 px-2 max-h-[120px] md:justify-between md:px-20 flex items-center justify-evenly gap-24 shadow shadow-black">
			<img
				src="/images/roedorNotes.png"
				alt="Imagem da logo"
				className="max-w-[200px]"
			/>

			<HamburgerMenu />
		</header>
	);
};

export default Header;
