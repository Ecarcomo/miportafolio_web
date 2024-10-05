import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WidgetsProyectos from "../components/WidgetsProyectos"
import WidgetsConocimientos from "../components/WidgetsConocimientos"
import WidgetsEducacion from "../components/WidgetsEducacion"
import WidgetsExpLaboral from "../components/WidgetsExpLaboral"
import HeaderInfoGeneral from "../components/HeaderInfoGeneral"

/**
 * Vista principal de App en donde se invocan todos los componentes de cada categorìa del curriculum
 * @param {string} mode variable global REDUX para Dark/Light Mode 
 * @param {string} bg_color variable global REDUX para color de letra 
 * @param {string} language variable global REDUX de idioma 
 * @returns  {Home} Home
 */
const Home = ({mode,bg_color,language}) => {
        return (
        <div  className=""style={{"backgroundColor":bg_color}}>
          <Container
           fluid='xl' 
           lg='12'
           md='12'
          >
            <br></br>
            <Row >
              <Col ><HeaderInfoGeneral mode={mode} language={language}/></Col>
            </Row>
            <br></br>
            <Row >
              <Col ><WidgetsExpLaboral mode={mode} language={language}/></Col>
            </Row>
            <br></br>
            <Row >
              <Col ><WidgetsEducacion mode={mode} language={language}/></Col>
            </Row>
            <br></br>
            <Row className='gy-3' >
              <Col lg='6' md='12'><WidgetsProyectos mode={mode} language={language}/></Col>
              <Col lg='6' md='12'><WidgetsConocimientos mode={mode} language={language}/></Col>
            </Row>
            <br></br>
          </Container>
        </div>
        )
      }
      
      export default Home