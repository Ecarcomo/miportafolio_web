import React from 'react'
import useInfoGeneral from "../hooks/useInfoGeneral"

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderInfoGeneral = ({mode}) => {
    const {state , data} = useInfoGeneral();
    return (
        <Card data-bs-theme={mode}>
        <Card.Body>
        {state==="success"?
          (
            <Container fluid="lg" >
                <Row>
                    <Col sm={2}>
                        <img width='100px' alt={data.nombre} src={data.img_src}></img>
                    </Col>
                    <Col sm={5}> 
                        <p>{data.nombre}</p>
                        <p>{data.profesion}</p>
                        <p>{data.Lugar} / Nacimiento: {data.fecha_nacimiento}</p>
                    </Col>
                    <Col sm={5}>
                        <p>Telefono : {data.num_tel}</p>
                        <p>{data.link_github}</p>
                        <p>{data.link_linkedin}</p>
                    </Col>
                </Row>
            </Container>
          )
          :
          (
            <Card.Title>{state}</Card.Title>
          )
        }
        </Card.Body>
    </Card>
    )
}

export default HeaderInfoGeneral
