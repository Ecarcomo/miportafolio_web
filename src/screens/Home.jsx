import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WidgetsProyectos from "../components/WidgetsProyectos"
import WidgetsConocimientos from "../components/WidgetsConocimientos"
import WidgetsEducacion from "../components/WidgetsEducacion"
import WidgetsExpLaboral from "../components/WidgetsExpLaboral"
import HeaderInfoGeneral from "../components/HeaderInfoGeneral"


const Home = ({mode,bg_color}) => {
        return (
        <>
          <Container fluid="xxl" style={{"backgroundColor":bg_color}} >
            <br></br>
            <Row>
              <Col><HeaderInfoGeneral mode={mode}/></Col>
            </Row>
            <br></br>
            <Row>
              <Col><WidgetsExpLaboral mode={mode}/></Col>
            </Row>
            <br></br>
            <Row>
              <Col><WidgetsEducacion mode={mode}/></Col>
            </Row>
            <br></br>
            <Row>
              <Col><WidgetsProyectos mode={mode}/></Col>
              <Col><WidgetsConocimientos mode={mode}/></Col>
            </Row>
            <br></br>
          </Container>
        </>
        )
      }
      
      export default Home