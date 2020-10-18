import React from 'react';
import './Header.css';
import {Link, useHistory } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <div className="title">breeze</div>
            <div>
                <div>MATCH</div>
                <div>CHANNEL</div>
            </div>
        </div>
    )
}

export default Header
