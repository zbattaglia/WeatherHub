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
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.APIKEY}`);
            // Pass the response data to reshape function
            weatherData = reshapeData(response.data);
            console.log( 'Sending back to the client', weatherData );
            // return weatherData to the client
            res.send( weatherData );
        } catch(error) {
            console.log('Error getting the weather from API', error);
        }
    }
    
    // Call getWeather and pass in location
    getWeather( location );

})

// function to extract and reshape data to use on the client side
function reshapeData( data ){
    // console.log( 'Reshaping Data', data );
    const currentWeather = {
        id : data.weather[0].id,
        condition : data.weather[0].main,
        description : data.weather[0].description,
        currentTemperatue : data.main.temp,
        feelsLike : data.main.feels_like,
        minTemperature : data.main.temp_min,
        maxTemperature : data.main.temp_max,
        percentHumidity : data.main.humidity,
        windSpeed : data.wind.speed,
        windGusts : data.wind.gust,
        percentCloudCover : data.clouds.all,
        weatherTimeOfCalculation : data.dt,
        sunrise : data.sys.sunrise,
        sunset : data.sys.sunset,
        city : data.name
    }

    return currentWeather;
}

module.exports = router;