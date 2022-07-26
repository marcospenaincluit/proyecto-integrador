const {Schema, model} = require('mongoose');

const shopSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String},
    email: {type: String},
    type: {type: String},
    published: {type: Boolean},
    geometry: {
        type: {type: String},
        coordinates: {type: String},
    }
    
});

const Shop = new model('Shop', shopSchema);

module.exports = Shop;
