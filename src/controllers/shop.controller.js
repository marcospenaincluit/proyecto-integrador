const axios = require('axios').default;
const API_KEY = process.env.GOOGLE_API_KEY;
const config = require('config');
const {basepath, geocode, locality} = config.get('services.google');
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
        const address = data.address +' '+locality;

        if (data){
            await axios.get(`${basepath}${geocode}/json?`, {
                params:{
                    key: API_KEY,
                    address: address
                }
            })
            .then((response) => {
                const { lat, lng } = response.data.results[0].geometry.location
                
                data.geometry.lat = lat;
                data.geometry.lng = lng;
            });

            const result = await saveShop(data);
            res.json(result)
        }
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
        
        res.json(result);
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