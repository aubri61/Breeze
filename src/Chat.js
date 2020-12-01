 import React from "react";
 import Avatar from "@material-ui/core/Avatar";
 import "./Chat.css"
 import {Link} from "react-router-dom";


 function Chat({name, message, profilepic, timestamp}){
     return( 

     <Link to={'/chats/${name}'}>
     <div className="chat">
      <Avatar className="chat_image" alt={name} src={profilepic} />
      
      <div className="chat_details">
         <p className="chat_name">{name}</p>
         <p className="chat_content">{message}</p>
      </div>

      <p className="chat_timestamp">{timestamp}</p>

     </div>
     </Link>
     );
 }

 export default Chat;  