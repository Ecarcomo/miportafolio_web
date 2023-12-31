import React from 'react'
import useInfoGeneral from "../hooks/useInfoGeneral"
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import Spinner from 'react-bootstrap/Spinner';

const HeaderInfoGeneral = ({mode}) => {
    const {state , data} = useInfoGeneral();
    return (
        <Card border="primary" data-bs-theme={mode}>
        <Card.Body>
        {state==="success"?
          (
            <Container >
                <Row   className='gy-3'  style={{"align-items": "center"}}>
                    <Col style={{"text-align": "center"}}>
                        <Image className='imgProfile' src={data.img_src}   />
                    </Col>
                    <Col > 
                        <h4><strong>{data.nombre}</strong></h4>
                        <p><strong>{data.profesion}</strong></p>
                        <cite>{data.Lugar} / Nacimiento: {data.fecha_nacimiento}</cite>
                    </Col>
                    <Col >
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
            <Card.Title><Spinner animation="grow" /></Card.Title>
          )
        }
        </Card.Body>
    </Card>
    )
}

export default HeaderInfoGeneral
