const { findShop, saveShop, deleteShop } = require('../services/databases/shops.service');

async function getShops(req,res){
    try {
        const result = await findShop();
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

async function getShopById(req,res){
    const { id }  = req.params;

    try {
        const result = await findShop(id);
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

async function addShop(req,res){
    try {
        const data = req.body;
        const result = await saveShop(data);
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

async function updateShopById(req,res){
    console.log('updateShop');
}

async function deleteShopById(req,res){
    console.log('deleteShop');
}

module.exports = { 
    getShops,
    getShopById,
    addShop,
    updateShopById,
    deleteShopById
};