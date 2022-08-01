var express = require('express');
const {addTrek,getTrek,updateTrekById,deleteTrek} = require('../Controller/lugar.controller');
var router = express.Router();

router.post('/',addTrek);
router.get('/',getTrek);
router.patch('/:id',updateTrekById);
router.delete('/:id',deleteTrek);

module.exports = router;