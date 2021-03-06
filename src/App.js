import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA85VKt5-jGgRbuLgsbCUQcS4stbPvrlSw",
    authDomain: "ssuet-react.firebaseapp.com",
    databaseURL: "https://ssuet-react-default-rtdb.firebaseio.com",
    projectId: "ssuet-react",
    storageBucket: "ssuet-react.appspot.com",
    messagingSenderId: "714298465759",
    appId: "1:714298465759:web:be8e4c5117b8692bef786a"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Head/>

      <section>
        {/* {user ? <ChatRoom /> : <SignIn />} */}
       
        
       { user ? <NewRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function Head(props) {
  return(
<header>
        <h2>Chatby App</h2>
        {props.rname2?
        <h5>Your Chat Room id is : {props.rname2}</h5>
        :
        ""
        }
        <SignOut />
      </header>
  );
  
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}><strong>Sign in with Google</strong></button>
      <h5 style={{textAlign:"center",color:'darkgreen',fontSize:"19px"}}>Connect together with ChatBy!</h5>
    </>
  )
}
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom(props) {

  
  const dummy = useRef();   
  const messagesRef = firestore.collection('messages').doc('room'+props.rname).collection('roommsgs');
  const query = messagesRef.orderBy('createdAt').limit(25);
  
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
   const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
  <>
    <main>
      <Head rname2={props.rname}/>      
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message" />
      <button type="submit" disabled={!formValue}>Send</button>
    </form>
  </>
  )
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}



function NewRoom()
{
  const [newroom,setNewRoom]=useState(0);
  const [roomid,setRoomid]=useState('');
  const [decide,setDecide]=useState(true);
  const [userRoom,setUserRoom]=useState('');
  const generateID = () => {
      var str="chatby-";
      const myRnId = parseInt(Date.now() * Math.random(1,10));
      setNewRoom(str + myRnId);
  }

  return(
    <>
    {(userRoom != "") ? 
    <ChatRoom rname={userRoom}/>
     :
    newroom != 0?  
    <div>
    <h3 style={{color:'black'}}> {newroom}</h3>
    <input value={newroom} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" />
    <button onClick={()=>setNewRoom(0)} >Go Back</button>
    <button onClick= {()=>setUserRoom(newroom)}>Go to Chat Room</button>
    </div>
    :
    <div>
    <button onClick={generateID} >Create a new room</button>
    <h4><strong>or</strong></h4>
    <input value={roomid} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" required/>
    <button onClick= {()=>{setUserRoom(roomid)} } disabled={!roomid}>Go to Chat Room</button>
    </div>
    }
    

    </>
  );
  }

export default App;
