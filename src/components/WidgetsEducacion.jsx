import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useEducacionFormal from "../hooks/useEducacionFormal"

 const WidgetsEducacion = ({mode}) => {
  const {state , data} = useEducacionFormal();

 return(
      <Card border="primary" data-bs-theme={mode}>
          <Card.Header as="h4">Educacion</Card.Header>
          <Card.Body>
          {state==="success"?
            (
            <ListGroup className="list-group-flush">
            <Card.Header as="h5">Formal</Card.Header>
              {
                data.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title> {fila.intervalo} - {fila.titulo} </Card.Title>
                      <Card.Text>{fila.institucion}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.descripcion}</cite>
                       </footer>
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

export default WidgetsEducacion;

