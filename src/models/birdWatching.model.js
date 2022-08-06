const { Schema, model } = require('mongoose')

const watchingSchema = new Schema({
    birdName: { type: String, required: true },
    pos: {
        lat: { type: Number, min: -90, max: 90, required: true },
        lng: { type: Number, min: -180, max: 180, required: true }
    },
    img: { type: String, default: process.env.BIRD_PLACEHOLDER },
    notes: { type: String, default: "No hay notas sobre este avistaje." },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Watching = new model('Watching', watchingSchema)

module.exports = Watching