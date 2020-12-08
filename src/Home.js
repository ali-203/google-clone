import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";


function Home() {
    return (
        <div className="home">
            <div className="home_header">
            <div className="home_headerLeft">
            <Link to="/about">About</Link>
            <Link to="/about">Store</Link>

            </div>
            <div className="home_headerRight">
            <Link to="/about">Gmail</Link>
            <Link to="/about">Image</Link>
            <AppIcon />
            </div>
            

            </div>
            <div className="home_body"></div>
        </div>
    );
}

export default Home;
