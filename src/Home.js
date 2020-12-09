import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import img1 from "./image/dp.png";
import { Search } from '@material-ui/icons';


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
            <Avatar/>
            </div>
            </div>
            <div className="home_body">
            <img src={img1} alt="" />
            <div className="home_inputContainer">
                <Search />
            </div>
            

            </div>
        </div>
    );
}

export default Home;
