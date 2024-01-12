import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useConfig from "../hooks/useConfig";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WithNavbar = () => {
  const {handleToggleMode ,handleToggleLanguage, mode , bg_color,language} = useConfig();
  return (
    <>
      <Navbar sticky="top" data-bs-theme={mode} className="bg-body-tertiary border border-danger">
          <Container >
          <Row style={{"width":"inherit"}}>
            <Col md={4} lg={4} style={{"width":"min-content"}}>
              <Navbar.Brand href="#home" 
               style={{"display":"flex","grid-gap":"20px"}}>
                <img
                  alt=""
                  src="../img/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {language === "espaniol"?(
                  <p><strong>Portafolio - Emmanuel Diego Carcomo</strong></p> 
                ):(
                  <p><strong>Portfolio - Emmanuel Diego Carcomo</strong></p>  
                )}
              </Navbar.Brand>
            </Col>
            <Col md={4} lg={6} >
            <Navbar.Collapse className="justify-content-between">
                <Button variant="danger">PDF CV</Button>
                <Form>
                  <Form.Check
                      type="switch"
                      label="English/Español"
                      id="disabled-custom-switch"
                      onClick={handleToggleLanguage}
                      style={{"color": (bg_color ==="white"?"black":"white")}}
                    />
                  <Form.Check
                    type="switch"
                    label="Dark Mode"
                    id="disabled-custom-switch"
                    onClick={handleToggleMode}
                    style={{"color": (bg_color ==="white"?"black":"white")}}
                  />
                </Form>
              </Navbar.Collapse>
            </Col>
          </Row>   
          </Container>
        </Navbar>
        <Outlet/>
      <Navbar data-bs-theme={mode} sticky="bottom" className="bg-body-tertiary border border-danger">
        <Container>
        
        {language === "espaniol"?(
          <h5 style={{"color":(bg_color ==="white"?"black":"white")}}>Sitio Web Desarrollado Bajo ReactJS y Boostrap</h5>
        ):(
          <h5 style={{"color":(bg_color ==="white"?"black":"white")}}>Website Developed Under React JS and Bootstrap</h5>
        )}
        
          </Container>
      </Navbar>
    </>
  )
}

export default WithNavbar