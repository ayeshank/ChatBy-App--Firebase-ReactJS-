import React,{useState} from 'react';
import {Link} from "react-router-dom";

export default function ExistingRoom() {
    const [roomid,setRoomid]=useState('');
    return(
      <>
      <h5>Enter Existing Room ID</h5>
      <input value={roomid} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" required/>
      <Link to="/room"><button>Go Back</button></Link>
      <Link to="/chatroom"><button>Go to Chat Room</button></Link>
      </>
    );
}
