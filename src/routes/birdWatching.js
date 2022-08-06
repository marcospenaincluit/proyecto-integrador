const express = require('express')
const router = express.Router()
const { getOneBirdWatching, getAllBirdWatchings, postBirdWatching, updateBirdWatching, deleteBirdWatching } = require('../controllers/birdWatching.controller')

// Get all
router.get('/', getAllBirdWatchings)

//Get one
router.get('/:id', getOneBirdWatching)

//Create one
router.post('/', postBirdWatching)

// Updating one
router.patch('/:id', updateBirdWatching)

// Deleting one
router.delete('/:id', deleteBirdWatching)

module.exports = router