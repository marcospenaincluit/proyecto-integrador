const { findShop, saveShop, updateShop, deleteShop } = require('../services/databases/shops.service');

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
    try {
        const { id }  = req.params;
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
    try {
        const { id }  = req.params;
        const data = req.body;
        const result = await updateShop(id, data);
        
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

async function deleteShopById(req,res){
    try {
        const { id }  = req.params;
        const result = await deleteShop(id);
        
        res.json(result)
    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}

module.exports = { 
    getShops,
    getShopById,
    addShop,
    updateShopById,
    deleteShopById
};