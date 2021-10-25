const express = require('express')
const router = express.Router();

// Dummy Weather Response
let weather = [{cityName: 'Minneapolis', weather: 'Sunny', temp: '75'},
                {cityName: 'Chicago', weather: 'Parlty Sunny', temp: '70'},
                {cityName: 'Green Bay', weather: 'Rainy', temp: '60'}
            ]

// for a get request on the 'weather' route, return our forecast info
router.get('/:location', (req, res) => {
    const location = req.params.location;
    let response = {};
    console.log("Weather", weather[0].cityName)
    for (let i = 0; i < weather.length; i++){
        console.log('In Weather array', weather[i].cityName);
        if(weather[i].cityName == location){
            response = weather[i];
        }
    }
    
    console.log('Got request for weather on the server at', req.params.location);
    console.log('Sending data back', response)
    res.send(response);
})

module.exports = router;