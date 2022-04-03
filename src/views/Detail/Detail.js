import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Badge, Card, Col, Container, Image, Row, Stack} from "react-bootstrap";

const Detail = () => {
    const params = useParams();
    const [advert, setAdvert] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/adverts/${params.id}`);
            setAdvert(response.data);
        }
        fetchData();
    }, [params.id])
    return (
        <div>
            <h1>Detail nr. {params.id}</h1>
            <h2>Title: {advert.title}</h2>
            <Row>
                <Col xs={12} md={"auto"}>
                    <Image src={advert.image}/>
                </Col>
                <Col>
                    <Card body>
                        <Row className={"mb-3"}>
                            <Col>
                                {advert.seller}<br/>
                                {advert.sellerPhone}
                            </Col>
                            <Col>
                                <Stack>
                                    <h3 className="text-end"> ${advert.price}</h3>
                                    {advert.canNegotiate && (<Badge bg={"primary"}>Can negotiate</Badge>)}
                                </Stack>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    {advert.description}
                                </p>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
            <Link to={"/"} className="btn btn-outline-secondary">to list</Link>
            <Link to={-1}>back</Link>
        </div>
    );
};

export default Detail;