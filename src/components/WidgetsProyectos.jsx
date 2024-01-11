import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useInfoCV from "../hooks/useInfoCV"
import Spinner from 'react-bootstrap/Spinner';

 const WidgetsProyectos = ({mode,language}) => {
  const {state , data} = useInfoCV();

  if(state==="success"){
    const data_es = data.espaniol.proyectos;
    const data_en = data.english.projects;


    return (
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
                      <Card.Title>{fila.titulo}</Card.Title>
                      <Card.Text>{fila.descrip.substring(0, 100)+"..."}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.tecnologias.substring(0, 50)+"..."}</cite>
                       </footer>
                      <Button variant="info">Ver Mas</Button>
                    </ListGroup.Item>
                ))
              }
            </ListGroup>
            ):(
              <ListGroup className="list-group-flush">
              {
                data_en.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.title}</Card.Title>
                      <Card.Text>{fila.description.substring(0, 100)+"..."}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.technologies.substring(0, 50)+"..."}</cite>
                       </footer>
                      <Button variant="info">Ver Mas</Button>
                    </ListGroup.Item>
                ))
              }
            </ListGroup>
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

export default WidgetsProyectos;

