const express = require('express');
const router = express.Router();
// axios for making API CALL
const axios = require('axios');
// dotenv is for accessing environmental variables. config reads the .env file in.
const dotenv = require('dotenv');
dotenv.config();

// for a get request on the 'weather' route, return our forecast info
router.get('/:location', (req, res) => {
    // get the location passed in with the request parameters
    const location = req.params.location;
    
    console.log( 'Getting weather on the server for', location );
    // async function to make a call to the Open Weather API for the selected location using the APIKEY stored in .env file
    const getWeather = async( location ) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}`);
            console.log('Got a response', response.data);
            
        } catch(error) {
            console.log('Error getting the weather from API', error);
        }
    }
    
    // Call getWeather and pass in location
    getWeather( location );

})

module.exports = router;