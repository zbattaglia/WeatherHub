// Example for how to modify state in a functional react component
import React from "react";

function ButtonCount() {
    // useState takes initial state as an argument (0)
    // Must be paired with a variable to store state (count) and a function to maninpulate (updateCount)
    const [count, updateCount] = React.useState(0);

    return (
        // Component just returns a jsx fragment to be rendered
        // Access state with {} and prints value to screen.
        // creates onClick function for button that accesses state manipulation function which increases state by 1.
        <div>
            <p>Count: {count}</p>
            <button onClick={()  => updateCount( count + 1 )}>Add One</button>
        </div>
    );
  }
  
  export default ButtonCount;