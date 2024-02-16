import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useInfoCV from "../hooks/useInfoCV"
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';

/**
 * @desc Seccion de visualizacion sobres proyectos destacables
 * @param {string} mode variable global REDUX para Dark/Light Mode 
 * @param {string} language variable global REDUX de idioma 
 * @example
 * //nombres, descripciomes y tecnologias utilizadas en proyectos realizados
 * @returns  {WidgetsProyectos} WidgetsProyectos
 */
 const WidgetsProyectos = ({mode,language}) => {
  const {state , data} = useInfoCV();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);

  if(state==="success"){
    const data_es = data.espaniol.proyectos;
    const data_en = data.english.projects;

    const HandleModal = (f) =>{
      setModalData(f);
      setModalShow(true);
    }
    
    return (
      <>
        <Card border="primary" data-bs-theme={mode}>
        {language === "espaniol"?(
          <Card.Header as="h4">Proyectos</Card.Header>
        ):(
          <Card.Header as="h4">Projects</Card.Header>
        )}
        
        <Card.Body>
            {language === "espaniol"?(
              <ListGroup className="list-group-flush">
              {
                data_es.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.titulo}<span className='yr-tag'>{fila.anio}</span></Card.Title>
                      <Card.Text>{fila.descrip.substring(0, 100)+"..."}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.tecnologias.substring(0, 50)+"..."}</cite>
                       </footer>
                      <Button variant="info" onClick={() => HandleModal(fila)}>Ver Mas..</Button>
                    </ListGroup.Item>
                ))
              }
            </ListGroup>
            ):(
              <ListGroup className="list-group-flush">
              {
                data_en.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.title}<span className='yr-tag'>{fila.year}</span></Card.Title>
                      <Card.Text>{fila.description.substring(0, 100)+"..."}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.technologies.substring(0, 50)+"..."}</cite>
                       </footer>
                      <Button variant="info"  onClick={() => HandleModal(fila)}>See More..</Button>
                    </ListGroup.Item>
                ))
              }
            </ListGroup>
            )}
        </Card.Body>
    </Card>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalData}
        language={language}
        mode={mode}
      />
    </>
    )

}

return (
    <Card border="primary" data-bs-theme={mode}>
        <Card.Body>
            <Card.Title><Spinner animation="grow" /></Card.Title>
        </Card.Body>
    </Card>
)
  
};

export default WidgetsProyectos;



//---------Modal para ampliacion de contenido del proyecto
function MyVerticallyCenteredModal(props) {
  const _data = props.data;
  return (
    <Modal
      {...props}
      data-bs-theme={props.mode}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className={(props.mode=== 'dark'?('special_modal'):(''))}>
    {props.language === "espaniol"?(
      <>
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            {_data.titulo}<span className='yr-tag'>{_data.anio}</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <center>
        {
          _data.img!=="" && <img src={_data.img}  width="90%"  height="360" alt={_data.titulo}></img>
        }
        {
          _data.vid!=="" && <video   width="90%"  height="360" controls>
                                <source src={ _data.vid} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
        }
        </center>
       {(_data.img!=="" ||_data.vid!=="") && <hr></hr>} 
          <h4>Breve descripción:</h4>
            <p>
            {_data.descrip}
            </p>
          <h4>Tecnologías utilizadas:</h4>
            <p>
            {_data.tecnologias}
            </p>
        {
          _data.link!=="" && 
          <>
            <h4>Links:</h4>
              <small><a href={_data.link}>
              {_data.link}
              </a></small>
          </>
        }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </>
    ):(
      <>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {_data.title}<span className='yr-tag'>{_data.year}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <center>
        {
          _data.img!=="" && <img src={_data.img}  width="90%"  height="360" alt={_data.title}></img>
        }
        {
          _data.vid!=="" && <video  width="90%"  height="360"  controls>
                                <source src={ _data.vid} type="video/mp4" />
                                Your browser not support this video element.
                            </video>
        }
        </center>
        <h4>Brief:</h4>
          <p>
          {_data.description}
          </p>
        <h4>Technologies:</h4>
          <p>
          {_data.technologies}
          </p>
          {
            _data.link!=="" && 
            <>
              <h4>Links:</h4>
                <small><a href={_data.link}>
                {_data.link}
                </a></small>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </>
    )}
    </div>
    </Modal>
  );
}