const Watching = require('../models/birdWatching.model')

const create = async function (data) {
    const watching = new Watching(data)
    return watching.save()
}

const readAll = async function () {
    const arr = Watching.find({})
    return arr
}

const readOne = async function (id) {
    const result = await Watching.findById(id)
    return result
}

const updateById = async function (data, id) {
    console.log(data, id)
    const result = await Watching.updateOne(
        { _id: id },
        {
            $set: {
                birdName: data.birdName,
                pos: data.pos,
                notes: data.notes,
                img: data.img
            }
        })
    return result
}

const deleteById = async function (id) {
    const result = await Watching.deleteOne({ _id: id })
    return result
}

module.exports = {
    create,
    readAll,
    readOne,
    updateById,
    deleteById
}
