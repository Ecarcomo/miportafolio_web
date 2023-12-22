import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useExpLaboral from "../hooks/useExpLaboral"

 const WidgetsExpLaboral = ({mode}) => {
  const {state , data} = useExpLaboral();

 return(
      <Card border="primary" data-bs-theme={mode}>
          <Card.Header as="h4">Experiencia Laboral</Card.Header>
          <Card.Body>
          {state==="success"?
            (
            <ListGroup className="list-group-flush">
              {
                data.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.empresa.tipo} - {fila.empresa.nombre}</Card.Title>
                      <cite><strong>Sector: </strong>{fila.sector}</cite>
                      <br></br>
                      {
                        fila.puestos.map((puesto,i)=>(
                          <>
                          <strong><small id={i}>{puesto.breve} / {puesto.intervalo}</small></strong>
                            <ul>
                            {
                              puesto.tareas.map((tarea)=>(
                                <li>{tarea}</li>
                              ))
                            }
                            </ul>
                          </>
                        ))
                      }
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

export default WidgetsExpLaboral;

