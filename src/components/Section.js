import React from 'react';
import {Route,Routes} from "react-router-dom";
import App from './App.js';
import CreateRoom from './CreateRoom.js';
import ExistingRoom from './ExistingRoom.js';
import NewRoom from './NewRoom.js';
import ChatRoom from './App.js';


export default class Section extends React.Component {
    
    render() {
        return (
            <div>
            <section>
            
                   <Routes>
                   <Route  path="/"  element={<NewRoom/>} />     
                    <Route  path="/createroom" element={<CreateRoom/>}  />
                    <Route path="/existingroom" element={<ExistingRoom/>}/>   
                    <Route path="/room" element={<NewRoom/>}/>
                    <Route path="/chatroom" element={<ChatRoom/>}/>
                    </Routes>
                    
            </section>
            </div>
        )
    }
}


