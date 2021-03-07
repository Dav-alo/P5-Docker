const express = require("express");
const router = express.Router();
const divController = require("../controllers/div")

//Metodos GET y POST 

router.get("/", divController.renderDivPage);
router.post("/", divController.getDiv);

module.exports = router