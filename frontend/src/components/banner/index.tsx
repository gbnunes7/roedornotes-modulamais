const Banner = () => {
	return (
		<div className="w-3/4 h-[400px] mx-auto bg-blue-200 mt-[20px] rounded-md md:min-h-[600px] md:flex md:justify-center md:items-center p-4 md:w-2/4">
			<figure className="md:flex md:flex-col md:justify-center md:items-center">
				<img src="images/logo.png" alt="Imagem da logo" />
				<figcaption className="mt-6 text-lg md:text-2xl">
					<span className="font-bold">Roedor Notes:</span> Transformando Catalogação em Conhecimento
				</figcaption>
			</figure>
		</div>
	);
};

export default Banner;
