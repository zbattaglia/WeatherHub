const express = require('express')
const router = express.Router();

// Dummy Weather Response
let weather = ['Monday', 'Cloudy', '66']

// for a get request on the 'weather' route, return our forecast info
router.get('/', (req, res) => {
    let response = {forecast: weather}
    console.log('Got request for weather on the server');
    res.send(response);
})

module.exports = router;