import React from 'react';
import {Link, useParams} from "react-router-dom";

const Detail = () => {
   const params = useParams();
    return (
        <div>
            <h1>Detail nr. {params.id}</h1>
            <Link to={"/"} className="btn btn-outline-secondary">to list</Link>
            <Link to={-1}>back</Link>
        </div>
    );
};

export default Detail;