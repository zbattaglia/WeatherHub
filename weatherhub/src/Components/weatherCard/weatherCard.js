import React from "react";

function WeatherCard() {
    // useState takes initial state as an argument (0)
    // Must be paired with a variable to store state (count) and a function to maninpulate (updateCount)
    const [count, updateCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()  => updateCount( count + 1 )}>Add One</button>
        </div>
    );
  }
  
  export default WeatherCard;