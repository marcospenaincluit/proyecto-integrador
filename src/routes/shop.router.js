const express = require('express');
const router = express.Router();
const { getShops ,getShopById, addShop, 
        updateShopById, deleteShopById } = require('../controllers/shop.controller');

/* GET users listing. */
router.get('/shops', getShops);
router.get('/shops/:id', getShopById);
router.post('/shops/new', addShop);
router.patch('/shops/:id', updateShopById);
router.delete('/shops/:id', deleteShopById);

module.exports = router;
  