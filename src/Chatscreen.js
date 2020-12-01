import { Avatar } from "@material-ui/core/";
import React, { useState} from "react";
import "./Chatscreen.css";

function Chatscreen(){
    const [input, setInput] = useState('')
    const [messages, setmessages] = useState([
        {
            name:'3대 300이하 꺼지삼',
            image:'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg',
            message: '오빵 하이염'
        },
        {
            name:'3대 300이하 꺼지삼',
            image:'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg',
            message: '오빵 몸좋다♥'
        },
        {
            name:'3대 300이하 꺼지삼',
            image:'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg',
            message: '3대 몇이양??'
        },
        {
            name:'3대 300이하 꺼지삼',
            image:'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg',
            message: '똑똑똑 거기 없어요??ㅎㅎ'
        },
        {
            name:'3대 300이하 꺼지삼',
            image:'https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/23/97546668.2.jpg',
            message: '모얌 ㅎㅎ 이 오빠 좀 팅기네? ㅎ'
        },
        {
            message: "꺼져 ㅗ"   
        }

    ]);

    const handleSend= (e)=> {
        e.preventDefault();

        setmessages([...messages, {message: input}]);
        setInput("");
    };

    return(        
        <div className="chatscreen">
            <p className="chatscreen_timestamp">'3대 300이하 꺼지삼' 님과 매칭되었어요 11/27/20</p>
            {messages.map((message) => ( 
               message.name ? (
                <div className="chatscreen_message">
                    <Avatar
                     className="chatscreen_image"
                     alt={message.name}
                     src={message.image}
                     />
                    <p className="chatscreen_text">{message.message}</p>
                </div>
               ) : (
                <div className="chatscreen_message">
                   <p className="chatscreen_text_user">{message.message}</p>
                </div>
               )
            ))}
            
            <div>
             <form className="chatscreen_input">
                <input 
                value={input}
                onChange={(e) => setInput (e.target.value)}
                className="chatscreen_inputField"
                placeholder="내용을 입력하세요..." type="text"
                />
                <button onClick={handleSend}   type="submit" className="chatscreen_inputButton">SEND</button>
             </form>
            </div>
        </div>
        );
        }

       


    

export default Chatscreen;