const Lugar = require('../Models/lugar.model');

async function saveTrek(data){
    const lugar = new Lugar(data);

    return lugar.save();
}

async function deleteOneTrek(id){
    const result = await Lugar.deleteOne({_id:id});
    if(result.deletedCount == 0){
        const error = new Error();
        Object.assign(error, {
            status: 404,
            message: 'Trek no encontrado'
        })
        throw error;
    }

    return result;
}

module.exports={saveTrek , deleteOneTrek};