const express = require("express");
const router = express.Router();
const freeController = require("../controllers/free")

//Definición de rutas
router.get("/", freeController.renderFreePage);
router.post("/", freeController.getFree);

module.exports = router