const Shop = require('../../models/shops.model');

async function findShop(){
    await Shop.find()
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })
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