import { Link } from "react-router-dom";
import useApp from "../../hooks/useAppContext";

const HamburgerMenu = () => {
	const { isOpen, toggleMenu } = useApp();

	return (
		<div className="relative">
			<button className="p-2 focus:outline-none" onClick={toggleMenu}>
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
					/>
				</svg>
			</button>

			<div
				className={`absolute top-12 right-0 bg-white shadow-lg py-2 px-4 rounded-lg ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<ul className="space-y-2">
					<li>
						<Link to="/" className="block text-gray-800 hover:text-blue-500">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/registrar"
							className="block text-gray-800 hover:text-blue-500"
						>
							Registrar
						</Link>
					</li>
					<li>
						<Link
							to="/roedores"
							className="block text-gray-800 hover:text-blue-500"
						>
							Roedores
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HamburgerMenu;
