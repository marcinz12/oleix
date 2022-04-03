import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import axios from "axios";


const List = () => {
    const [adverts, setAdverts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/adverts');
            setAdverts(response.data);
        }
        fetchData();
    }, []);
    const [search, setSearch] = useState("");
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const handleFormSubmit = async (event) =>{
        event.preventDefault();
        // const response = await axios.get(`/adverts?q=${search}`);
        const response = await axios.get(`/adverts`, {params: {q: search}});
        setAdverts(response.data);
    }

    return (
        <div>
            <h1>List</h1>
            <Form onSubmit={handleFormSubmit}>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search for"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </InputGroup>
            </Form>
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