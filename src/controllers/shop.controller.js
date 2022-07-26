const { findShop, saveUser, deleteUser } = require('../services/databases/shops.service');

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
    console.log('getShopById');
}

async function addShop(req,res){
    console.log('addShop');
}

async function updateShop(req,res){
    console.log('updateShop');
}

async function deleteShop(req,res){
    console.log('deleteShop');
}

module.exports = { 
    getShops, 
    getShopById, 
    addShop,
    updateShop,
    deleteShop
};