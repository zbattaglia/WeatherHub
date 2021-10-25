import './App.css';
import Header from './Components/header/header'
import Forecast from './Components/Forecast/forecast'
import LocationSearch from './Components/LocationBar/locationSearch'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row id = "header">
          <Header />
        </Row>
        <Row id = "locationSearch">
          <LocationSearch />
        </Row>
        <Row id = "forecast">
          <Forecast />
        </Row>
      </Container>
    </div>
  );
}

export default App;
