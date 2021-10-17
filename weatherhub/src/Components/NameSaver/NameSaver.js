// Example for how to modify state in a functional react component
import React from "react";

export default function NameSaver() {
    // useState takes initial state as an argument ("" a blank string)
    // Must be paired with a variable to store state (name) and a function to maninpulate (updateName)
    const [name, updateName] = React.useState("");

    // handleSubmit is called on click of submit button
    const handleSubmit = (e) => {
        // prevent default prevents form from clearing automatically after click of submit
        e.preventDefault();
        alert(`Submitting name: ${name}`)
    }

    // onChange happens whenever there is typing in the input field
    const onChange = (e) => {
        // calls updateName (the state handle function) with the value of the input field
        updateName(e)
    }

    // Logs the current value of state (name in input field)
    // This can't be in the onChange function because state is not updated and we will lag by a cycle
    // useEffect() is a built in React-Hook function that shows state in "Real Time"
    console.log(`Name is:`, name)
    return (
        // Component just returns a jsx fragment to be rendered
        // Access state with {} and prints value to screen.
        // creates sets the value of the input field to the current value of name in state (which is updated with typing)
        // On Click of the submit button, call the handleSubmit function
        <form>
            <label>
                Name:
                <input type="text" value={name} 
                    onChange={e => onChange(e.target.value)}
                />
            </label>
            <button onClick={(e) => handleSubmit(e)}>
                Submit
            </button>
        </form>
    );
  }
