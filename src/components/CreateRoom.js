import React,{useState} from 'react';
import {Link} from "react-router-dom";

export default function CreateRoom() {
    const [newroom,setNewRoom]=useState('');
  function generateID ()
  {
    var str="chatby-";
    const myRnId = parseInt(Date.now() * Math.random(1,10));
    setNewRoom(str + myRnId);
  }
  return(
    <>
    <h5>Your Room ID: </h5>
    <input value={newroom} placeholder="Enter Room ID" />
    <Link to="/room"><button>Go Back</button></Link>
    <Link to="/chatroom"><button>Go to Chat Room</button></Link>
    </>
  );
}
