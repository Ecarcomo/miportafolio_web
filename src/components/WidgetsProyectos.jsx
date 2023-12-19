import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useProyectos from "../hooks/useProyectos"

 const WidgetsProyectos = () => {
  const {state , data} = useProyectos();

 return(
      <Card border="primary">
          <Card.Header as="h5">Proyectos</Card.Header>
          <Card.Body>
          {state==="success"?
            (
            <ListGroup className="list-group-flush">
              {
                data.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.title}</Card.Title>
                      <Card.Text>  lorem ipsum - {fila.id}  </Card.Text>
                      <Button variant="info">Ver Mas</Button>
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

export default WidgetsProyectos;

