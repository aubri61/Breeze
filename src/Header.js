import React from 'react';
import './Header.css';
import {Link, useHistory } from "react-router-dom";
import chats from "./Chats";

function Header() {
    return (
        <div className="header">
          <Link to='/'>
            <div className="title">breeze</div>
          </Link>
         <div className="nav">
          <Link to='/'>
            <div className="match">MATCH</div>
          </Link>
            <div className="channel">CHANNEL</div>
          <Link to='/chats'>
            <div className="chat">CHAT</div>
          </Link>
         </div>
        </div>
    )
}

export default Header;
