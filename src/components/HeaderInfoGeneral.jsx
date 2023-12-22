import React from 'react'
import useInfoGeneral from "../hooks/useInfoGeneral"
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderInfoGeneral = ({mode}) => {
    const {state , data} = useInfoGeneral();
    return (
        <Card border="primary" data-bs-theme={mode}>
        <Card.Body>
        {state==="success"?
          (
            <Container fluid="lg" >
                <Row style={{"align-items": "center"}}>
                    <Col sm={2}>
                        <Card.Img className='imgProfile' src={data.img_src} />
                    </Col>
                    <Col sm={5}> 
                        <h4><strong>{data.nombre}</strong></h4>
                        <p><strong>{data.profesion}</strong></p>
                        <cite>{data.Lugar} / Nacimiento: {data.fecha_nacimiento}</cite>
                    </Col>
                    <Col sm={5}>
                        <small>Telefono:    {data.num_tel}</small>
                        <br></br>
                        <small>Email:   {data.email}</small>
                        <hr></hr>
                        <small><Link target="_blank" to={"https://"+data.link_github} >{data.link_github}</Link></small>
                        <br></br>
                        <small><Link target="_blank" to={"https://"+data.link_linkedin} >{data.link_linkedin}</Link></small>
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
