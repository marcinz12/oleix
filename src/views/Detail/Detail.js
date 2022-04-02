import React from 'react';
import {Link} from "react-router-dom";

const Detail = () => {
    return (
        <div>
            <h1>Detail</h1>
            <Link to={"/"} className="btn">list</Link>
        </div>
    );
};

export default Detail;