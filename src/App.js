import React from 'react';
import Header from './Header';
import Swipe from './Swipe';
import Chats from './Chats';
import './App.css'
import Chatscreen from "./Chatscreen";
import {
  BrowserRouter as Router,
  Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <Router>
       <Header />

        <Switch>
         <Router path="/chats/:person">
           <Chatscreen/>


         </Router>
         <Route path="/chats">
           <Chats />

         </Route>
        
         <Route path="/">  
          <Swipe />
     
         </Route>

          
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
