import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'
import useInfoCV from "../hooks/useInfoCV"

import Spinner from 'react-bootstrap/Spinner';

/**
 * @desc Seccion de visualizacion sobre Conocimientos y Habiidades Importantes
 * @param {string} mode variable global REDUX para Dark/Light Mode 
 * @param {string} language variable global REDUX de idioma 
 * @example
 * //Listados de habilidades duras y blandas, tanto de tecnologías aplicadas como manejo en entornos sociales
 * @returns  {WidgetsConocimientos} WidgetsConocimientos
 */
 const WidgetsConocimientos = ({mode,language}) => {
  const {state , data} = useInfoCV();

  if(state==="success"){
    const data_es = data.espaniol.conocimientos;
    const data_en = data.english.skills;


    return (
      <Card border="primary" data-bs-theme={mode}>
      <Card.Body>
          {language === "espaniol"?(
            <> 
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Habilidades Duras</Card.Header>
                  {
                    data_es.h_duras.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Title>{fila.titulo}</Card.Title>
                            <Card.Text>{fila.texto}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Habilidades Blandas</Card.Header>
                  {
                    data_es.h_blandas.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Text>{fila}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
            </>
          ):(
            <>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Hard Skills</Card.Header>
                  {
                    data_en.hard_skills.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Title>{fila.title}</Card.Title>
                            <Card.Text>{fila.text}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Soft Skills</Card.Header>
                  {
                    data_en.soft_skills.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Text>{fila}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
            </>
          )}
      </Card.Body>
  </Card>
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

export default WidgetsConocimientos;
