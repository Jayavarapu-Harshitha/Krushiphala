import React from 'react';
import './Homepage.css';
import { Wave } from 'react-animated-text';
import Homebk from "./images/Homebk.jpg";
function Homepage() {
    return (
        <div className="home">
            <img id="background" src={Homebk} alt="background" />
            <div className="title" >
                Krushiphala
            </div>
        </div>
    );
}

export default Homepage;