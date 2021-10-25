import React from "react";
import axios from "axios";
import './locationSearch.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';

function LocationSearch() {
    // useState takes initial state as an argument (0)
    // Must be paired with a variable to store state (count) and a function to maninpulate (updateCount)
    const [weather, updateWeather] = React.useState("");
    const [location, updateLocation] = React.useState({});

    // onChange happens whenever there is typing in the input field
    const onChange = (e) => {
        // calls updateName (the state handle function) with the value of the input field
        updateLocation(e)
    }

    function getWeather() {
        console.log( 'Sending weather request to the server' );
        let response = axios.get(`/weather/${location}`);
        response.then((value) =>{
            console.log('Returned from the server:', value.data);
            updateWeather( value.data )
        })
    }
    console.log('The location is', location );
    console.log(`The weather at ${location} is ${weather.weather} and ${weather.temp}`);
    return (
        // Component just returns a jsx fragment to be rendered
        // Updates state with value typed into location search
        // creates onClick function for button that accesses state manipulation function and sends current location for weather.
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Choose Location"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e => onChange(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={()  => getWeather()}>
                    SELECT
                </Button>
            </InputGroup>
        </div>
    );
  }
  
  export default LocationSearch;