import React from 'react'
import useInfoCV from "../hooks/useInfoCV"
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import Spinner from 'react-bootstrap/Spinner';

const HeaderInfoGeneral = ({mode,language}) => {
    const {state , data} = useInfoCV();

    if(state==="success"){
        const data_es = data.espaniol.info_general;
        const data_en = data.english.general_info;


        return (
            <Card border="primary" data-bs-theme={mode}>
            <Card.Body>
              <Container >
                {language === "espaniol"?(
                    <Row   className='gy-3'  style={{"alignItems": "center"}}>
                        <Col style={{"textAlign": "center"}}>
                            <Image className='imgProfile' src={data_es.img_src}   />
                        </Col>
                        <Col > 
                            <h4><strong>{data_es.nombre}</strong></h4>
                            <p><strong>{data_es.profesion}</strong></p>
                            <cite>{data_es.Lugar} / Nacimiento: {data_es.fecha_nacimiento}</cite>
                        </Col>
                        <Col >
                            <small>Telefono:    {data_es.num_tel}</small>
                            <br></br>
                            <small>Email:   {data_es.email}</small>
                            <hr></hr>
                            <small><Link target="_blank" to={"https://"+data_es.link_github} >{data_es.link_github}</Link></small>
                            <br></br>
                            <small><Link target="_blank" to={"https://"+data_es.link_linkedin} >{data_es.link_linkedin}</Link></small>
                        </Col>
                    </Row>
                ):(
                    <Row   className='gy-3'  style={{"alignItems": "center"}}>
                        <Col style={{"textAlign": "center"}}>
                            <Image className='imgProfile' src={data_en.img_src}   />
                        </Col>
                        <Col > 
                            <h4><strong>{data_en.name}</strong></h4>
                            <p><strong>{data_en.profession}</strong></p>
                            <cite>{data_en.location} / Birth Date: {data_en.birthdate}</cite>
                        </Col>
                        <Col >
                            <small>Phone Number:    {data_en.phone_number}</small>
                            <br></br>
                            <small>Email:   {data_en.email}</small>
                            <hr></hr>
                            <small><Link target="_blank" to={"https://"+data_en.github_link} >{data_en.github_link}</Link></small>
                            <br></br>
                            <small><Link target="_blank" to={"https://"+data_en.linkedin_link} >{data_en.linkedin_link}</Link></small>
                        </Col>
                    </Row>
                )}
                </Container>
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

}

export default HeaderInfoGeneral
