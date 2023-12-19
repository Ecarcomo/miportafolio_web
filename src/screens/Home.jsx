import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WidgetsProyectos from "../components/WidgetsProyectos"
import WidgetsConocimientos from "../components/WidgetsConocimientos"

const Home = () => {
        return (
        <>
          <Container fluid="lg">
            <Row>
              <Col><WidgetsProyectos/></Col>
              <Col><WidgetsConocimientos/></Col>
            </Row>
          </Container>
        </>
        )
      }
      
      export default Home