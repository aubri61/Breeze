import React from 'react';
import Header from './Header';
import Swipe from './Swipe';
import Home from './Home';
import Channel from './Channel';
import Chatscreen from "./Chatscreen";
import Chats from './Chats';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chats/:person">
          <Header />
           <Chatscreen/>
         </Route>
         <Route path="/chats">
          <Header />
           <Chats />
         </Route>

          <Route path="/channel">
            <Header />
            <Channel />
          </Route>
      
          <Route path="/match">
            <Header />
            <Swipe />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
