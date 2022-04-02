import React from 'react';
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const adverts = [
    {
        "id": 0,
        "title": "Fantastic Fresh Shoes",
        "price": "141.00",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "seller": "Lexus",
        "image": "http://placeimg.com/400/400/business",
        "sellerPhone": "+48 950 865 197",
        "canNegotiate": true,
        "createdOn": "2022-03-18T15:26:36.993Z",
        "categoryId": 4
    },
    {
        "id": 1,
        "title": "Small Cotton Car",
        "price": "976.00",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "seller": "Jonathan",
        "image": "http://placeimg.com/400/400/business",
        "sellerPhone": "+48 942 306 474",
        "canNegotiate": false,
        "createdOn": "2022-03-17T22:48:14.040Z",
        "categoryId": 9
    },
    {
        "id": 2,
        "title": "Practical Cotton Chair",
        "price": "43.00",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "seller": "Adah",
        "image": "http://placeimg.com/400/400/business",
        "sellerPhone": "+48 287 383 294",
        "canNegotiate": true,
        "createdOn": "2022-03-18T16:31:55.466Z",
        "categoryId": 7
    },
    {
        "id": 3,
        "title": "Rustic Fresh Chips",
        "price": "847.00",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "seller": "Sean",
        "image": "http://placeimg.com/400/400/business",
        "sellerPhone": "+48 745 549 144",
        "canNegotiate": true,
        "createdOn": "2022-03-18T00:19:12.261Z",
        "categoryId": 5
    },
]

const List = () => {
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