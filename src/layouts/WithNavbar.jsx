import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useConfig from "../hooks/useConfig";

const WithNavbar = () => {
  const {handleToggleMode ,handleToggleLanguage, mode , bg_color,language} = useConfig();
  return (
    <>
      <Navbar sticky="top" data-bs-theme={mode} className="bg-body-tertiary border border-danger">
      <Container fluid='xl' className="d-flex flex-column flex-sm-row">
          <div style={{"color": (bg_color ==="white"?"black":"white")}} className='mb-2 mb-sm-0'>
                <img
                  alt=""
                  src="../img/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{'   '}
                {language === "espaniol"?(
                  <strong>CV - Emmanuel Diego Carcomo</strong>
                ):(
                  <strong>Resume - Emmanuel Diego Carcomo</strong>
                )}
          </div>
          <div className="d-inline-flex">
            <Button 
              href={language === "espaniol"?(
                '../attachments/EmmanuelCarcomo-cv_es.pdf'
                ):(
                '../attachments/EmmanuelCarcomo-cv_en.pdf'
                )}
              download="Resume-PDF-document"
              target="_blank"
              rel="noreferrer"
              variant="danger"
              className="align-self-center"> PDF CV</Button>
                <Form className='mx-2'>
                  <Form.Check
                      type="switch"
                      label="Español/English"
                      id="disabled-custom-switch"
                      onClick={handleToggleLanguage}
                      style={{"color": (bg_color ==="white"?"black":"white")}}
                    />
                  <Form.Check
                    type="switch"
                    label={(mode ==="dark"?"Dark Mode":"Light Mode")}
                    id="disabled-custom-switch"
                    onClick={handleToggleMode}
                    style={{"color": (bg_color ==="white"?"black":"white")}}
                  />
                </Form>
          </div>
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