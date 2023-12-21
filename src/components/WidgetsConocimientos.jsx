import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'
import useConocimientos from "../hooks/useConocimientos"

 const WidgetsConocimientos = ({mode}) => {
  const {state , data} = useConocimientos();

  return (
    <Card border="primary" data-bs-theme={mode}>
      <Card.Header as="h5">Conocimientos</Card.Header>
      <Card.Body>
      {state==="success"?
        (
        <ListGroup className="list-group-flush">
          {
            data.map((fila, index) => (
                <ListGroup.Item  key={index}> 
                  <Card.Title>{fila.title}</Card.Title>
                  <Card.Text>  lorem ipsum - {fila.id}  </Card.Text>
                </ListGroup.Item>
            ))
          }
        </ListGroup>
        )
        :
        (
          <Card.Title>{state}</Card.Title>
        )
      }
      </Card.Body>
  </Card>
  )
};

export default WidgetsConocimientos;
