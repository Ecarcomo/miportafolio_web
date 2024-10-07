import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import React from 'react'
import useInfoCV from "../hooks/useInfoCV"
import Spinner from 'react-bootstrap/Spinner';

/**
 * @desc Seccion de visualizacion sobre la Información Educativa
 * @param {string} mode variable global REDUX para Dark/Light Mode 
 * @param {string} language variable global REDUX de idioma 
 * @example
 * //Instituciones , carrera , periodos y conocimientos adquiridos destacables
 * @returns  {WidgetsEducacion} WidgetsEducacion
 */
 const WidgetsEducacion = ({mode,language}) => {
  const {state , data} = useInfoCV();

  if(state==="success"){
    const data_es = data.espaniol.educacion;
    const data_en = data.english.education;


    return (
        <Card border="primary" data-bs-theme={mode}>
        {language === "espaniol"?(
          <Card.Header as="h4">Educacion</Card.Header>
        ):(
          <Card.Header as="h4">Education</Card.Header>
        )}
        
        <Card.Body>
            {language === "espaniol"?(
              <ListGroup className="list-group-flush">
                <Card.Header as="h5">Formal</Card.Header>
                {
                  data_es.map((fila, index) => (
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
            ):(
              <ListGroup className="list-group-flush">
            <Card.Header as="h5">Formal</Card.Header>
              {
                data_en.map((fila, index) => (
                    <ListGroup.Item  key={index}> 
                      <Card.Title> {fila.period} - {fila.degree} </Card.Title>
                      <Card.Text>{fila.institution}</Card.Text>
                      <footer className="blockquote-footer">
                      <cite>{fila.description}</cite>
                       </footer>
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
          <Card.Title>
            <span className='connectFB'><Spinner animation="grow" />{(language === "espaniol"? <>Conectando con</> :<>Connecting with</>)} Firebase ...</span>
            </Card.Title>
        </Card.Body>
    </Card>
)
  
};

export default WidgetsEducacion;

