const Shop = require('../../models/shops.model');

async function findShop(id=0){
    let result = '';

    if(id != 0){
        result = await Shop.findById({_id: id});
    }else{
        result = await Shop.find();
    }

    return result;
}

async function saveShop(data){
    const shop = new Shop(data);
    let result = await shop.save()
    
    return result
}

async function updateShop(id,data){
    return await Shop.findByIdAndUpdate(id, data, {new: true})

}

async function deleteShop(id){
    return await Shop.findByIdAndDelete(id)
}

module.exports = {findShop, saveShop, updateShop, deleteShop}