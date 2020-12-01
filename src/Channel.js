import React, {Component, useState} from 'react';
import {Link} from "react-router-dom"

import './Channel.css'
import Card from './Card.js'
import Information from './Information'

import dongsuk from './people/dongsuk.jpg';
import dojoon from './people/dojoon.jpg';
import yohan from './people/yohan.jpg';
import soyoo from './people/soyoo.jpg';
import jessi from './people/jessi.jpeg';


function Channel() {
    return (
        <div className="card-container">
            <Link to="/information">
                <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당 💪🏻😎 " />
            </Link>
            <Card image={dojoon} title="한강 러닝 같이 해요!"/>
            <Card image={yohan} title="저렴한 가격에 PT 해드립니다 :) "/>
            <Card image={soyoo} title="필라테스 수강생 모집합니다! 선착순 10분 구해요."/>
            <Card image={jessi} title="서핑하러 가실 분 ~~"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
            <Card image={dongsuk} title="연희동 스타칼리에서 같이 운동하실 분 구합니당"/>
        </div>
    )
}

export default Channel;