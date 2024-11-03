const express = require('express');
const router = express.Router();
const itemsController = require('/controllers/itemsControllers');


router.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema!');
});


router.get('/solve', itemsController.solveEquation);

module.exports = router;
