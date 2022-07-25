const express = require('express');
const router = express.Router();
const { getShops, getShopById, 
    addShop, updateShop, deleteShop } = require('../controllers/shop.controller');

/* GET users listing. */
router.get('/shops', getShops);
router.get('/shops/:id', getShopById);
router.post('/shops', addShop);
router.patch('/shops/:id', updateShop);
router.delete('/shops/:id', deleteShop);

module.exports = router;
  