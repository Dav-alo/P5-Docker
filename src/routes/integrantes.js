const router = require('express').Router()

router.route('/').get((req, res) => {
  msg = `Integrantes : Sofia del Muro Reyes y David Ramirez Carmona`;
  res.json({ msg });
})

module.exports = router