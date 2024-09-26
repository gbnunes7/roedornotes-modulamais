class Controller {
	constructor(entityService) {
		this.entityService = entityService;
	}

	async getAllData(req, res) {
		try {
			const getAllReg = await this.entityService.getAllData();
			return res.status(200).json(getAllReg);
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}

	async getById(req, res) {
		try {
			const { id } = req.params;
			const getOneReg = await this.entityService.getById(id);

			if (!getOneReg) {
				return res.status(404).json({ err: `Not found.` });
			}

			return res.status(200).json(getOneReg);
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}

	async getByEspecie(req, res) {
		try {
			const especie = req.query.especie;
			const getOneReg = await this.entityService.getByEspecie(especie);

			if (!getOneReg || getOneReg.length === 0 ) {
				return res.status(404).json({ err: `Not found.` });
			}

			return res.status(200).json(getOneReg);
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}

	async update(req, res) {
		const { id } = req.params;
		const updatedData = req.body;
		try {
			const isUpdated = await this.entityService.update(
				updatedData,
				Number(id)
			);
			if (!isUpdated) {
				return res.status(400).json({ msg: "Update not successfully" });
			}
			return res.status(200).json({ msg: "Update successfully" });
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}

	async createNew(req, res) {
		try {
			const data = req.body;
			const newReg = await this.entityService.createNew(data);
			return res.status(200).json(newReg);
		} catch (err) {
			return res.status(500).json({ err: `Not created. ${err.message}` });
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;
			const deletedReg = this.entityService.deleteReg(id);

			if (!deletedReg) {
				return res.status(404).json({ msg: `${id} ID not found.` });
			}

			return res.status(200).json({ msg: `Register ID ${id} deleted.` });
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}
}

module.exports = Controller;
