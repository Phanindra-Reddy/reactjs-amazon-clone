import React from 'react'
import { Link } from 'react-router-dom'
//import Header from './Header';

const PageNotFound = () => {
    return (
        <>
        {/* <Header/> */}
        <div className="page-not-found" style={{textAlign:'center'}}>
            <h3>404 Page Not Found!!</h3>
            <Link to="/">Back Home</Link>
        </div>
        </>
    )
}

export default PageNotFound;
