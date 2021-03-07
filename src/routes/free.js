const express = require("express");
const router = express.Router();
const freeController = require("../controllers/free")

//Metodos GET y POST 
router.get("/", freeController.renderFreePage);
router.post("/", freeController.getFree);

module.exports = router