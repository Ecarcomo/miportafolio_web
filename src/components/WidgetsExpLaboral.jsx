import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useInfoCV from "../hooks/useInfoCV"
import Spinner from 'react-bootstrap/Spinner';

 const WidgetsExpLaboral = ({mode,language}) => {
  const {state , data} = useInfoCV();

  if(state==="success"){
    const data_es = data.espaniol.exp_laboral;
    const data_en = data.english.work_experience;


    return (
        <Card border="primary" data-bs-theme={mode}>
        {language === "espaniol"?(
          <Card.Header as="h4">Experiencia Laboral</Card.Header>
        ):(
          <Card.Header as="h4">Work Experience</Card.Header>
        )}
        
        <Card.Body>
            {language === "espaniol"?(
              <ListGroup className="list-group-flush">
              {
                data_es.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.empresa.tipo} - {fila.empresa.nombre}</Card.Title>
                      <cite><strong>Sector: </strong>{fila.sector}</cite>
                      <br></br>
                      {
                        fila.puestos.map((puesto,i)=>(
                          <div key={i}>
                          <strong ><small id={i}>{puesto.breve} / {puesto.intervalo}</small></strong>
                            <ul>
                            {
                              puesto.tareas.map((tarea,t)=>(
                                <li key={t}>{tarea}</li>
                              ))
                            }
                            </ul>
                          </div>
                        ))
                      }
                    </ListGroup.Item>
                ))
              }
            </ListGroup>
            ):(
              <ListGroup className="list-group-flush">
              {
                data_en.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title>{fila.company.type} - {fila.company.name}</Card.Title>
                      <cite><strong>Sector: </strong>{fila.sector}</cite>
                      <br></br>
                      {
                        fila.positions.map((position,i)=>(
                          <div key={i}>
                          <strong ><small id={i}>{position.brief} / {position.period}</small></strong>
                            <ul>
                            {
                              position.tasks.map((task,t)=>(
                                <li key={t}>{task}</li>
                              ))
                            }
                            </ul>
                          </div>
                        ))
                      }
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

export default WidgetsExpLaboral;

