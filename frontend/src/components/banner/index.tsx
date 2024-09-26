const Banner = () => {
	return (
		<div className="w-3/4 h-[400px] mx-auto bg-blue-200 mt-[20px] rounded-md">
			<figure className="p-8">
				<img src="images/logo.png" alt="Imagem da logo" />
				<figcaption className="mt-6 text-lg">
					<span className="font-bold">Roedor Notes:</span> Transformando Catalogação em Conhecimento
				</figcaption>
			</figure>
		</div>
	);
};

export default Banner;
