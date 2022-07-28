var express = require('express');
const {addTrek,getTrek,updateTrek,deleteTrek} = require('../Controller/lugar.controller');
var router = express.Router();

router.post('/',addTrek);
router.get('/',getTrek);
router.patch('/',updateTrek);
router.delete('/',deleteTrek);

module.exports = router;