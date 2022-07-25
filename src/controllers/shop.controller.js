

async function getShops(req,res){
    console.log('getShops');
    
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