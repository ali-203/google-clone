import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home">
            <h1>This is HOMEPAGE</h1>
            <div className="home_header">
            <div className="home_headerLeft">
            <Link to="/about">about</Link>
            <Link to="/about">about</Link>

            </div>
            <div className="home_headerRight">
            <Link to="/about">about</Link>
            <Link to="/about">about</Link>
            </div>

            </div>
            <div className="home_body"></div>
        </div>
    );
}

export default Home;
