var express = require('express');
const {addTrek,getTrek,updateTrekById,deleteTrek,filterTrek,findTrek} = require('../Controller/lugar.controller');
var router = express.Router();

router.get('/',getTrek); //trae Todos
router.get('/id/:id',findTrek) // trae segun ID
router.get('/filter',filterTrek); // filtra segun nombre, localidad O dificulad

router.post('/',addTrek);

router.patch('/:id',updateTrekById);

router.delete('/:id',deleteTrek);

module.exports = router;