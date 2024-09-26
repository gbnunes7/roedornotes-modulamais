const express = require("express");
const RoedorController = require("../controllers/roedorController.js");
const roedorController = new RoedorController();

const router = express.Router();

router.get("/roedores", (req, res) => roedorController.getAllData(req, res));

router.get("/roedores/id/:id", (req, res) =>
	roedorController.getById(req, res)
);

router.get("/roedores/habitat", (req, res) =>
	roedorController.getByHabitat(req, res)
);

router.get("/roedores/especie", (req, res) =>
	roedorController.getByEspecie(req, res)
);

router.post("/roedores/", (req, res) => roedorController.createNew(req, res));
router.put("/roedores/id/:id", (req, res) => roedorController.update(req, res));
router.delete("/roedores/id/:id", (req, res) =>
	roedorController.delete(req, res)
);

module.exports = router;
