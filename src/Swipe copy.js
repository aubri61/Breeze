import React, {Component, useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import profilePic from './profilePic.jpg';
import people1 from './바디1.jpg';
import people2 from './바디2.jpg';
import people3 from './바디3.jpg';
import Avatar from '@material-ui/core/Avatar'
import SwipeButtons from './SwipeButtons';
import database from './firebase';



import location from './location.png';

import './Swipe.css';


function Swipe() {
    const profile={
        name: "야옹이",
        image: profilePic,
        age: 24,
        hobby: ["야구", "필라테스", "헬스", "다이어트", "스쿼시"],
        comment: "저랑 운동 같이 하실 몸 좋은 오빠 찾아용 @ya_ong2"
    };

    const [people, setPeople]=useState([]);

    useEffect(() => {

        const unsubscribe=database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map((doc) => ({name:doc.name, age:doc.age, location:doc.location, comment:doc.comment, image:doc.image, interest:doc.interest })))
        ));

        return () => {
            unsubscribe();
        }

    }, [people])

    // console.log(people[0])

    // const [people, setPeople] = useState([
    //     {
    //         name: "언더아머 단속반",
    //         image: people2,
    //         age: 24,
    //         comment: "같이 헬스장 다니실 여성분 찾습니다 :)",
    //         hobby : ["야구", "헬스", "축구", "농구", "바디프로필", "고양이"]
    //     },

    //     {
    //         name: "연희동 헬창",
    //         image: people1,
    //         comment: "같이 헬스장 다니실 여성분 찾습니다 :)",
    //         age: 20,
    //         hobby : ["야구", "헬스", "축구", "농구", "바디프로필", "고양이"]

    //     },

    //     {
    //         name: "단백질 킬러",
    //         image: people3,
    //         comment: "같이 헬스장 다니실 여성분 찾습니다 :)",
    //         age: 27,
    //         hobby : ["야구", "헬스", "축구", "농구", "바디프로필", "고양이"]

    //     },
    // ]);


   // const [profile, setProfile]=useState([
     //   {
       //     name: "야옹이",
        //    image: profilePic,
          //  age: 24
        //}
   // ]);

    return (
        <div className="container">
            <div className="profile">
                {/* <img src={profilePic} alt="img" /> */}
                <div className="profile_row">
                    <Avatar className="profile_pic" alt="dd" src={profilePic} style={{width: "150px", height: "150px"}} />
                    {/* <div className="profile_pic"></div> */}
                    <div className="profile_info">
                        <div className="profile_name">{profile.name}</div>
                        <div className="profile_age">{profile.age}</div>
                    </div>
                </div>

                <div className="profile_location">
                    <img width="25px" height="25px" src={location} alt="loc"></img>
                    <div className="profile_location_text">서울시 서대문구 연희동</div>
                </div>

                <div className="profile_hobby">
                    {profile.hobby.map(hob => (
                        <div className="profile_hobbies">{"#"+hob}</div>
                    ))}
                </div>
                    
                <div className="profile_comment">
                    {profile.comment}
                </div>
            </div>
            <div className="cards">
                
                <div>
                    <div>
                        {people}
                    </div>
                    {people.map((person) => (
                            <TinderCard
                                className="swipe"
                                key={person.name}
                                preventSwipe={['up', 'down']}>

                                <div 
                                    style={{ backgroundImage: `url(${person.image})` }} 
                                    className="card" 
                                >
                                                
                                </div>
                                <div style={{backgroundColor: "white", width: "400px"}}>
                                    <div className="person_info">
                                        <div className="person_name">{person.name}</div>
                                        <div className="person_age">{person.age}</div>
                                    </div>

                                    <div className="person_comment">
                                        {person.comment}
                                    </div>

                                    <div className="person_hobby">
                                        {person.interest.map(hob => (
                                            <div className="person_hobbies">{hob}</div>
                                        ))}
                                    </div>

                                    <div className="pics">
                                        <Avatar className="pic" alt="dd" src={people1} variant="rounded"  style={{width: "100px", height: "100px", borderRadius: "20px"}} />
                                        <Avatar className="pic" alt="dd" src={people2} variant="rounded"  style={{width: "100px", height: "100px", borderRadius: "20px"}} />
                                        <Avatar className="pic" alt="dd" src={people3} variant="rounded"  style={{width: "100px", height: "100px", borderRadius: "20px"}} />
                                                                
                                    </div>

                                   
                                    <div className="person_location">
                                        <img width="25px" height="25px" src={location} alt="loc"></img>
                                        <div className="person_location_text">{person.location}</div>
                                    </div>
                                </div>
                                
                            </TinderCard>
                        ))}

                    </div>
                    <div style={{position: "absolute", right: "45vh", bottom: "10vh"}}>
                        <SwipeButtons />
                    </div>
            </div>
            
        </div>
    )
}


export default Swipe;
