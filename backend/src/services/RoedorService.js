const Services = require("./Services.js");
const datasource = require("../database/models")

class RoedorService extends Services {
	constructor() {
		super("Roedor");
	}

	async getByHabitat(habitat) {
		return datasource[this.model].findOne({ where: { habitat } });
	}
}

module.exports = RoedorService;
