import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import profilePic from './profilePic.jpg';
import people1 from './people1.jpg';
import people2 from './people2.jpg';
import people3 from './people3.jpg';


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

    const [people, setPeople] = useState([
        {
            name: "박보검",
            image: people1,
            age: 24
        },

        {
            name: "채영대",
            image: people2,
            age: 20
        },

        {
            name: "오영석",
            image: people3,
            age: 27
        },
    ]);


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
                    <div className="profile_pic"></div>
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
                        <div className="profile_hobbies">{hob}</div>
                    ))}
                </div>
                    
                <div className="profile_comment">
                    {profile.comment}
                </div>
            </div>
            <div className="cards">
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
                            <h3>{person.name}</h3>
                        </TinderCard>
                    ))}
            </div>
        </div>
    )
}

export default Swipe;
