const Controller = require("./Controller.js");
const RoedorService = require("../services/RoedorService.js");

const roedorService = new RoedorService();

class RoedorController extends Controller {
	constructor() {
		super(roedorService);
	}

	async getByHabitat(req, res) {
		try {
			const habitat = req.query.habitat;
			const getOneReg = await this.entityService.getByHabitat(habitat);

			if (!getOneReg) {
				return res.status(404).json({ err: `Not found.` });
			}

			return res.status(200).json(getOneReg);
		} catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}
}

module.exports = RoedorController;
