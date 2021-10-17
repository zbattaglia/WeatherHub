import './forecast.css'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import ButtonCount from '../ButtonCount/ButtonCount';
import NameSaver from '../NameSaver/NameSaver'

function Forecast() {
    return (
        <div>
            <p>The weather forecast goes here</p>
            <ButtonCount />
            <NameSaver />
        </div>
    );
  }
  
  export default Forecast;