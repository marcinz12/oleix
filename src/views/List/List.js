import React from 'react';
import {Link} from "react-router-dom";

const List = () => {
    return (
        <div>
            <h1>List</h1>
            <Link to={"/advert"}>advert</Link>
        </div>
    );
};

export default List;