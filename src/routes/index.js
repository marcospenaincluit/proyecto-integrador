const express = require('express');
const { getIndex } = require('../controllers/index.controller');
const router = express.Router();

/* GET home page. */
router.get('/', getIndex);

module.exports = router;
