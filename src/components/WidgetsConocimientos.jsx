import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'
import useConocimientos from "../hooks/useConocimientos"

import Spinner from 'react-bootstrap/Spinner';

 const WidgetsConocimientos = ({mode,language}) => {
  const {state , data} = useConocimientos();

  if(language=== "español"){
    return (
      <Card border="primary" data-bs-theme={mode}>
          <Card.Header as="h4">Conocimientos</Card.Header>
          <Card.Body>
          {state==="success"?
            (
              <>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Habilidades Duras</Card.Header>
                  {
                    data.h_duras.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Title>{fila.title}</Card.Title>
                            <Card.Text>{fila.texto}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Habilidades Duras</Card.Header>
                  {
                    data.h_blandas.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Text>{fila}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </>
            )
            :
            (
              <Card.Title><Spinner animation="grow" /></Card.Title>
            )
          }
          </Card.Body>
      </Card>
    )
  }
  else{
    return(
      <Card border="primary" data-bs-theme={mode}>
          <Card.Header as="h4">Skills</Card.Header>
          <Card.Body>
          {state==="success"?
            (
              <>
                <ListGroup className="list-group-flush">
                  <Card.Header as="h5">Hard Skills</Card.Header>
                  {
                    data.hard_skills.map((fila, index) => (
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
                    data.soft_skills.map((fila, index) => (
                      <ListGroup.Item key={index}>
                            <Card.Text>{fila}</Card.Text>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </>
            )
            :
            (
              <Card.Title><Spinner animation="grow" /></Card.Title>
            )
          }
          </Card.Body>
      </Card>
    )
  }

};

export default WidgetsConocimientos;
