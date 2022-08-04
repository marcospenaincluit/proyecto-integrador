function getAllBirdWatchings(req, res) {
    res.send("Get all bird watchings")
}


function getOneBirdWatching(req, res) {
    res.send(`Getting ${req.params.id}`)
}


function postBirdWatching(req, res) {
    res.send("Posting bird watching")
}

function updateBirdWatching(req, res) {
    res.send(`Updating ${req, params.id}`)
}
function deleteBirdWatching(req, res) {
    res.send(`Deleting ${req.params.id}`)
}

module.exports = { getOneBirdWatching, getAllBirdWatchings, postBirdWatching, updateBirdWatching, deleteBirdWatching };