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

async function updateOneTrek(id,data){
    const result = await Lugar.updateOne(
        {"id":id},
        {$set:{
            nombre : data.nombre,
            localidad : data.localidad,
            distanciaKm : data.distanciaKm,
            coordenadas : data.coordenadas,
            necesitaGuia : data.necesitaGuia,
            tieneCosto : data.tieneCosto,
            tipo : data.tipo,
            imagen : data.imagen,
            dificultad : data.dificultad,
            tramo : data.tramo
        }}
    );

    return result;
}

async function getFilterTreks(nombre, localidad, dificultad){
    
    const result = await Lugar.find({
        $or:[
            {nombre: nombre},
            {localidad: localidad},
            {dificultad: dificultad}
        ]
    })

    return result;
}


async function getOneTrek(id){
    
    const result = Lugar.find({ _id: id })

    return result;
}



module.exports={saveTrek , deleteOneTrek, updateOneTrek, getFilterTreks, getOneTrek};