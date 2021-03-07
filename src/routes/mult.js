const express = require("express");
const router = express.Router();
const multController = require("../controllers/mult")

//Metodos GET y POST 
router.get("/", multController.renderMultPage);
router.post("/", multController.getMult);

module.exports = router