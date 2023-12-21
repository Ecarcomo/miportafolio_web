import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WidgetsProyectos from "../components/WidgetsProyectos"
import WidgetsConocimientos from "../components/WidgetsConocimientos"
import HeaderInfoGeneral from "../components/HeaderInfoGeneral"

const Home = ({mode}) => {
        return (
        <>
          <Container fluid="xxl" style={{"backgroundColor":(mode ==="dark"?"black":"white")}} >
            <br></br>
            <Row>
              <Col><HeaderInfoGeneral mode={mode}/></Col>
            </Row>
            <br></br>
            <Row>
              <Col><WidgetsProyectos mode={mode}/></Col>
              <Col><WidgetsConocimientos mode={mode}/></Col>
            </Row>
          </Container>
        </>
        )
      }
      
      export default Home