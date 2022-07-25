const {Schema, model} = require('mongoose');

const lugarSchema = Schema({
    nombre: {type: String, required: true},
    tipo: {type: String}, //cascada, cerro, quebrada, olla, etc
    departamento: {type: String}, //capital, punilla,colon,etc
    localidad: {type: String},// municipio
    imagen: {type: String}, //una url de la imagen
    distanciaKm:{type: Number},
    dificultad:{type: String}, //alta,media,baja
    enlace:{type:String} //enlace de wikilock con el tramo

})

const Lugar  = new model('lugar',lugarSchema);


module.export = Lugar;
