const express = require('express')
const router = express.Router()
const { getOneBirdWatching, getAllBirdWatchings, postBirdWatching, updateBirdWatching, deleteBirdWatching } = require('../controllers/birdWatching.controller')

// Get all
router.get('/', getAllBirdWatchings)

//Get one
router.get('/:id', getOneBirdWatching)

//Create one
router.post('/create', postBirdWatching)

// Updating one
router.patch('/update/:id', updateBirdWatching)

// Deleting one
router.delete('/delete/:id', deleteBirdWatching)

module.exports = router