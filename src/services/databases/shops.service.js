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
    return shop.save()
}

async function deleteShop(id){
    const result = await Shop.deleteOne({_id: id});
    if (result.deletedCount === 0) {
        const err = new Error();
        Object.assign(err, {
            status: 404,
            message: 'User not found'
        })
        throw err;
    }
    return result;
}

module.exports = {findShop, saveShop, deleteShop}