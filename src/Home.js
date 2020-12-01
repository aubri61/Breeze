import React, {Component, Fragment, useState} from 'react';
import {Link,  } from "react-router-dom";


import './Home.css'

function Home() {
    return (
        <Fragment>
            <div className="background" id="back1">
                <h1>"Feel the gentle breeze"</h1>
                <h3>매일 혼자 하는 운동, 지겹지 않으신가요? <br />브리즈로 당신의 삶에 산뜻한 바람을 불어넣어보아요.</h3>
            </div>
            <div className="background" id="back2">
                <h1>당신 근처의 운동 메이트</h1>
                <h3>자전거 타기, 한강 산책, 헬스장, 축구, 야구까지 <br /> 함께 건강한 라이프를 즐길 친구들을 찾아보세요.</h3>
            </div>
            <div className="background" id="back3">
                <h1>한 번의 터치, <br /> 편리한 매칭</h1>
                <h3>간단한 터치만으로 마음에 쏙 드는 운동메이트를 찾을 수 있어요. <br />원하는 운동메이트와 함께 운동을 즐겨요! </h3>
            </div>
            <Link to="/match" style={{ textDecoration: 'none' }}>
                <div className="button">매칭 하러 가기</div>
            </Link>
        </Fragment>
    )
}

export default Home;