const {Schema, model} = require('mongoose');

const lugarSchema = Schema({
    nombre: {type: String, required: true},
    localidad: {type: String, required: true},// municipio
    distanciaKm:{type: Number,required: true},
    coordenadas:{
        "Altitud" : {type: String , required: true},
        "Longitud" : {type: String, required: true},
        },
    necesitaGuia:{type:Boolean},
    tieneCosto:{type:Boolean},
    tipo: {type: String}, //cascada, cerro, quebrada, olla, etc
    imagen: {type: String}, //una url de la imagen
    dificultad:{type: String}, //alta,media,baja
    tramo:{type:String} //enlace de arhivo gpx

})

const Lugar  = new model('lugar',lugarSchema);


module.exports = Lugar;
