import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import axios from "axios";



const List = () => {
const [adverts, setAdverts] = useState([]);
useEffect( ()=>{
    const fetchData = async()=>{
        const response = await axios.get('/adverts');
        setAdverts(response.data);
    }
    fetchData();
},[])
    return (
        <div>
            <h1>List</h1>
            <Link to={"/advert"}>advert</Link>

            <ListGroup>
                {adverts.map(advert => (
                    <LinkContainer key={advert.id} to={`/advert/${advert.id}`}>
                        <ListGroup.Item action>{advert.title}</ListGroup.Item>
                    </LinkContainer>
                ))}
            </ListGroup>

        </div>
    );
};

export default List;