import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";



function Search( {hideButtons = false}) {
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log("you hit the search button >>", input)
        history.push("/search")
    };

    return (
        <form className='search'>
        <div className="search_input">
            <SearchIcon className="search_inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon />
        </div>
        {!hideButtons ? (
            <div className="search_buttons">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>

            </div>
        ) :(  <div className="search_buttons">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>

            </div>)
        }
        </form>
    );
}

export default Search;
