const express = require("express");
const router = express.Router();
const subController = require("../controllers/resta")

//Metodos GET y POST 
router.get("/", subController.renderSubPage)
router.post("/", subController.getSub);

module.exports = router