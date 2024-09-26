const datasource = require("../database/models/index.js");

class Services {
	constructor(model) {
		this.model = model;
	}

	async getAllData() {
		return datasource[this.model].findAll();
	}

	async getById(id) {
		return datasource[this.model].findByPk(id);
	}

	async getByEspecie(especie) {
		return datasource[this.model].findAll({ where: { especie } });
	}

	async update(updateData, id) {
		const arrayOfUpdatedData = datasource[this.model].update(updateData, {
			where: { id: id },
		});
		if (arrayOfUpdatedData[0] === 0) {
			return false;
		}
		return true;
	}

	async createNew(dataReg) {
		return datasource[this.model].create(dataReg);
	}

	async deleteReg(id) {
		return datasource[this.model].destroy({ where: { id: id } });
	}
}

module.exports = Services;
