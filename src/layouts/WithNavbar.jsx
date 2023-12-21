import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import useConfig from "../hooks/useConfig"

const WithNavbar = () => {
  const {handleToggleMode , mode} = useConfig();
  return (
    <>
      <Navbar sticky="top" data-bs-theme={mode} className="bg-body-tertiary">
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
                onClick={handleToggleMode}
                style={{"color":(mode ==="light"?"black":"white")}}
              />
            </Form>
          </Container>
        </Navbar>
        <Outlet/>
      <Navbar data-bs-theme={mode} sticky="bottom" className="bg-body-tertiary">
        <Container>
          <h5 style={{"color":(mode ==="light"?"black":"white")}}>Sitio Web Desarrollado Bajo ReactJS y Boostrap</h5>
        </Container>
      </Navbar>
    </>
  )
}

export default WithNavbar