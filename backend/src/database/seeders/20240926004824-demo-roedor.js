"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"roedores",
			[
				{
					nome: "Senhora Bigodes",
					especie: "Capivara",
					idade: 4,
					peso: 65,
					status: "Saudável",
					habitat: "Lago Sul",
					comportamento: "Muito ativa, gosta de nadar no lago durante a manhã",
					dieta: "Prefere pasto fresco e frutas, especialmente maçãs",
					observacao:
						"Costuma socializar com Diógenes, muitas vezes são vistos juntos",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Helena",
					especie: "Capivara",
					idade: 3,
					peso: 58,
					status: "Saudável",
					habitat: "Floresta Oeste",
					comportamento:
						"Não socializa bem com outras capivaras, frequentemente vista.",
					dieta: "Consome uma variedade de vegetação, incluindo folhas e capim",
					observacao: "",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Garibalda",
					especie: "Capivara",
					idade: 5,
					peso: 70,
					status: "Necessita de cuidados",
					habitat: "Recinto Norte",
					comportamento:
						"Mais reservada, prefere fficar sozinha na maioria das vezes.",
					dieta: "",
					observacao:
						"Diagnosticado com uma infecção no olho esquerdo, tratamento com colírio iniciado",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Diógenes",
					especie: "Capivara",
					idade: 2,
					peso: 55,
					status: "Saudável",
					habitat: "Lago Sul",
					comportamento:
						"Jovem e curioso, explora frequentemente novas áreas do recinto",
					dieta:
						"Gosta de uma dieta variada, incluindo frutos e vegetação densa",
					observacao:
						"Mostra interesse em explorar áreas fora do habitat designado, requer monitoramento extra.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Darius III",
					especie: "Capivara",
					idade: 6,
					peso: 72,
					status: "Saudável",
					habitat: "Lago Sul",
					comportamento:
						"Grande e dominante, tende a liderar o grupo nas interações sociais",
					dieta: "Prefere pasto grosso e casca de árvore",
					observacao:
						"Mostra comportamento protetor, especialmente quando está perto de Senhorita Bigodes",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("roedores", null, {});
	},
};
