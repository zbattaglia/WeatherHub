// imports express
const express = require('express');
const bodyParser = require('body-parser');
// creates a constant 'app' that is an instance of express running. Set a port to available or 5000
const app = express();
// brings in the weather router and uses it for the '/weather' route
const weatherRouter = require('./routes/weatherRouter')
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(express.static('build'));


app.use('/weather', weatherRouter)

// start listening on "port" and display success message
app.listen(port, () => console.log(`Listening on port: ${port}`));

