import React,{useState} from 'react';
import {Link} from "react-router-dom";

export default function NewRoom() {
  return (
    <div>
       <Link to="/createroom"><button >New Room</button></Link>
    <Link to="/existingroom"><button >Existing Room</button></Link>
    </div>
  )
}
