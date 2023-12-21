import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useProyectos from "../hooks/useProyectos"

 const WidgetsProyectos = ({mode}) => {
  const {state , data} = useProyectos();

 return(
      <Card border="primary" data-bs-theme={mode}>
          <Card.Header as="h5">Proyectos</Card.Header>
          <Card.Body>
          {state==="success"?
            (
            <ListGroup className="list-group-flush">
              {
                data.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.title}</Card.Title>
                      <Card.Text>{fila.descrip.substring(0, 100)+"..."}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.tecnologias.substring(0, 50)+"..."}</cite>
                       </footer>
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

