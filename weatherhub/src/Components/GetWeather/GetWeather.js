// Example for how to modify state in a functional react component
import React from "react";
import axios from "axios";

function GetWeather() {
    // useState takes initial state as an argument (0)
    // Must be paired with a variable to store state (count) and a function to maninpulate (updateCount)
    const [weather, updateWeather] = React.useState("");

    function getWeather() {
        console.log( 'Sending weather request to the server' );
        let response = axios.get('/weather');
        response.then((value) =>{
            console.log('Returned from the server:', value.data);
            updateWeather( value.data.forecast )
        })
    }
    console.log('The weather forecast is', weather );
    return (
        // Component just returns a jsx fragment to be rendered
        // Access state with {} and prints value to screen.
        // creates onClick function for button that accesses state manipulation function which gets weather data.
        <div>
            <p>Weather Forecast: {weather}</p>
            <button onClick={()  => getWeather()}>Forecast</button>
        </div>
    );
  }
  
  export default GetWeather;