const express = require('express');
const menuService = require('../../services/menu/menuService');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const data = await menuService.fetchData();
  res.send(data);
});

module.exports = router;
