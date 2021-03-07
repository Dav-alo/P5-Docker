const express = require("express");
const router = express.Router();
const adderController = require("../controllers/suma")

//Metodos GET y POST 
router.get("/", adderController.renderAdderPage)
router.post("/", adderController.getSuma);

module.exports = router
