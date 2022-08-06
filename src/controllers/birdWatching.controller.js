const Watching = require('../models/birdWatching.model')
const { create, readAll, readOne, deleteById, updateById } = require('../services/birdWatching.service')


async function getAllBirdWatchings(req, res) {
    try {
        const result = await (readAll())
        res.json(result)
    } catch (err) {
        res.send(err)
    }
}


async function getOneBirdWatching(req, res) {
    try {
        const id = req.params.id
        const result = await (readOne(id))
        res.json(result)
    } catch (err) {
        res.json(err)
    }
}


async function postBirdWatching(req, res) {
    try {
        const data = req.body
        const result = await create(data)
        res.json(result)
    } catch (err) {
        res.json(err)
    }

}


async function updateBirdWatching(req, res) {
    try {
        const data = req.body
        const id = req.params.id
        const result = await updateById(data, id)
        res.json(result)
    } catch (err) {
        res.send(err)
    }
}


async function deleteBirdWatching(req, res) {
    try {
        const { id } = req.params
        const result = await deleteById(id)
        res.json(result)

    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    getOneBirdWatching,
    getAllBirdWatchings,
    postBirdWatching,
    updateBirdWatching,
    deleteBirdWatching
};