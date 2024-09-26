import { CardProps } from "../../interface/cardRoedor";

const CardRoedor: React.FC<CardProps> = ({ src, alt, nome }) => {
	return (
		<figure className="bg-blue-200 w-3/4 min-h-52 flex flex-col items-center p-4 rounded shadow shadow-black hover:cursor-pointer hover:scale-110 duration-100">
			<img src={src} className="rounded m-2 object-cover" alt={alt} />
			<figcaption className="font-semibold text-xl">{nome}</figcaption>
		</figure>
	);
};

export default CardRoedor;
