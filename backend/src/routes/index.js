const express = require("express");
const roedorRoutes = require("./roedorRoutes.js");
const cors = require("cors");

module.exports = (app) => {
	app
		.route("/")
		.get((req, res) =>
			res.status(200).json("RoedorNote Projeto para estágio - ModulaMais")
		);
	app.use(cors(), express.json(), roedorRoutes);
};
