import React, {Component, useState} from 'react';
import {Link,  } from "react-router-dom";
import dongsuk from './people/dongsuk.jpg';

import './Information.css'

function Information() {

    return (
        <div className="info">            
            <img src={dongsuk} />
            <div className="info-content">
                <div>
                    <h1>연희동 스타칼리에서 같이 운동하실 분 구합니당💪🏻😎</h1>
                    <p>안녕하세요! 연희동에 살고 있는 건장한 남자입니다..ㅎㅎ<br/>연희동 스타칼리 헬스장 이용하시는 분들 중에 <br />저랑 같이 운동하실 분 구해요!<br />여자 남자 상관 없습니다 ㅎㅎ 편하게 연락주세요!</p>
                </div>
                <button onClick={() => alert('참가 신청이 완료되었습니다!')}>참가하기</button>
            </div>
        </div>
    )
}

export default Information;