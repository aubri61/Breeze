import React, {Component, useState} from 'react';
import dongsuk from './people/dongsuk.jpg';
import dojoon from './people/dojoon.jpg';

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="dongsuk" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card;