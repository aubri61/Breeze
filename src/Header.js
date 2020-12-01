import React from 'react';
import './Header.css';
import {Link, useHistory } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to="/" className="titleLink" style={{ textDecoration: 'none' }}>
                <div className="title">breeze</div>
            </Link>
            <div className="nav">
                <Link to="/match" style={{ textDecoration: 'none' }}>
                    <div className="match">MATCH</div>
                </Link>
                <Link to="/channel" style={{ textDecoration: 'none' }}>
                    <div className="channel">CHANNEL</div>
                </Link>
                <Link to="/likes" style={{ textDecoration: 'none' }}>
                    <div className="likes">LIKES</div>
                </Link>
            </div>
        </div>
    )
}

export default Header
