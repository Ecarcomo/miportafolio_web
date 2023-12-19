import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const WithNavbar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="../img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Portafolio - Emmanuel Diego Carcomo 
            </Navbar.Brand>
            <Form>
              <Form.Check
                type="switch"
                label="Dark Mode"
                id="disabled-custom-switch"
              />
            </Form>
          </Container>
        </Navbar>
        <Outlet/>
      <Navbar sticky="bottom" className="bg-body-tertiary">
        <Container>
          <h5>Sitio Web Desarrollado Bajo ReactJS y Boostrap</h5>
        </Container>
      </Navbar>
    </>
  )
}

export default WithNavbar